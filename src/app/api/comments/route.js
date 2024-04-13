import Connect from '../../../Connection/connection';
import Comment from '../../../Models/commentSchema';

Connect();
// add a comment
  async function POST(req, res) {
    try {
        const body = await req.json();
        const newComment = new Comment({
          utilisateur: body.utilisateur,
          publication: body.publication,
          contenu: body.contenu
        });
        const savedComment = await newComment.save();
        return Response.json(savedComment);
    }catch (error) {
        console.error('Erreur lors de la création du commentaire :', error);
        return Response.json({ message: `Erreur interne du serveur: ${error}`});
      }
  }
// get all comments
 async function GET(req,res){
  try{
    const comments = await Comment.find();
    if(comments.length >= 1){
      return Response.json(comments)
    }
    return Response.json({message: "no comment found"}) 
  }catch(error){
    console.log('erreur: ',error);
    return new Response.json({message: `Erreur interne du serveur: ${error}`})
  }
 } 

module.exports = { POST, GET };
