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
    const body = await req.json();
    console.log(body.mot_de_passe);
    if (!(body.mot_de_passe)) {
      return  Response.json({ message: 'Le mot de passe est requis' });
    }
    const hashedPassword = await bcrypt.hash(body.mot_de_passe, 10);
    const newUser = new User({ nom:body.nom, email:body.email, mot_de_passe: hashedPassword });
    await newUser.save();
    console.log(newUser);
    return  Response.json(newUser);
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur :', error);
    return new Response.json({ message: 'Erreur interne du serveur' });
  }
}


module.exports = {GET, POST}