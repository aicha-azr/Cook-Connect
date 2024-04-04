import Connect from "@/Connection/connection";
import User from "@/Models/userSchema";
import bcrypt from 'bcryptjs';

// Assuming you have already created an Express app and it's listening on a port

// get all users
async function GET(req, res) {
  try {
    await Connect(); // Ensure the connection is established
    const users = await User.find();
    console.log(users);
    if (users.length < 1) {
      console.log({ message: "no user found" });
      return Response.json({ message: "no user found" });
    }
    return Response.json(users);
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs:', error);
    return Response.json({ message: 'Erreur interne du serveur' });
  }
}

// add a user
async function POST(req, res) {
  try {
    await Connect(); // Ensure the connection is established
    const body = await req.json();

    if (!body.mot_de_passe) {
      return Response.status(400).json({ message: 'Le mot de passe est requis' });
    }
    const hashedPassword = await bcrypt.hash(body.mot_de_passe, 10);
    
    const newUser = new User({ nom: body.nom, email: body.email, mot_de_passe: hashedPassword });

    await newUser.save();

    return Response.json(newUser); // 201 Created status code for successful creation
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur :', error);
    return Response.json({ message: 'Erreur interne du serveur' });
  }
}

export { GET, POST };
