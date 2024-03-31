import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
const Connect = require('@/Connection/connection');
const User =  require('@/Models/userSchema');
const bcrypt = require('bcryptjs');

export async function POST(req) {

  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local');
  }

  // Get the headers
  const headerPayload = headers(req);
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occurred -- no svix headers', {
      status: 400
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occurred', {
      status: 400
    });
  }

  // Get the ID and type
  const { id } = evt.data;
  const eventType = evt.type;

  //create a user in mongodb
if(eventType === 'user.created'){
    try {
        // Connectez-vous à MongoDB
        await Connect();
  
        // Hachez le mot de passe
        const hashedPassword = await bcrypt.hash(payload.mot_de_passe, 10);
  
        // Créez un nouvel utilisateur
        const newUser = new User({ nom: payload.nom, email: payload.email, mot_de_passe: hashedPassword });
  
        // Sauvegardez le nouvel utilisateur dans la base de données
        await newUser.save();
  
        console.log('Nouvel utilisateur créé :', newUser);
  
        // Répondez avec les détails de l'utilisateur créé
        return new Response(JSON.stringify(newUser), { status: 200 });
      } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur :', error);
        return new Response('Erreur interne du serveur', { status: 500 });
      }
}


  console.log(`Webhook with an ID of ${id} and type of ${eventType}`);
  console.log('Webhook body:', body);

  return new Response('', { status: 200 });
}
