const Connect = require('@/Connection/connection');
const User =  require('@/Models/userSchema');
const bcrypt = require('bcryptjs');
// get all users
async function GET(req,res)
{
  try{
    await Connect();
  const users = await User.find();
  console.log(users);
    if(users.length < 1){
      console.log({message: "no user found"})
      return Response.json({message: "no user found"})
    }
    return new Response(users);

  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs:', error);
    return new Response({ message: 'Erreur interne du serveur' });
  }
}
//add a user

async function POST(req, res) {
  try {
    await Connect();
    const { nom, email, mot_de_passe } = req.body;
    
    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(mot_de_passe, 10);

    // Créer un nouvel utilisateur avec le mot de passe haché
    const newUser = new User({ nom, email, mot_de_passe: hashedPassword });
    
    // Enregistrer le nouvel utilisateur
    await newUser.save();
    console.log(newUser)
    // Retourner la réponse
    return Response.json(newUser);
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur :', error);
    return Response.json({ message: 'Erreur interne du serveur' });
  }
}


module.exports = {GET, POST}