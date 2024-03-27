import Connect from '@/Connection/connection';
import Like from '@/Models/likeSchema';

Connect();
// add a like
  async function POST(req, res) {
    try {
        const body = await req.json();
        const newLike = new Like({
          utilisateur: body.utilisateur,
          publication: body.publication,
         
        });
        const savedLike = await newLike.save();
        return Response.json(savedLike);
    }catch (error) {
        console.error('Erreur lors de la création du like :', error);
        return Response.json({ message: `Erreur interne du serveur: ${error}`});
      }
  }
// get all likes
 async function GET(req,res){
  try{
    const likes = await Like.find();
    if(likes.length >= 1){
      return Response.json(likes)
    }
    return Response.json({message: "no like found"}) 
  }catch(error){
    console.log('erreur: ',error);
    return new Response.json({message: `Erreur interne du serveur: ${error}`})
  }
 } 

module.exports = { POST, GET };
