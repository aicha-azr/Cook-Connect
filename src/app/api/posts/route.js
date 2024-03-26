import Connect from '@/Connection/connection';
import Post from '@/Models/postSchema';
Connect();
// add a post
  async function POST(req, res) {
    try {
        const body = await req.json();
        const newPost = new Post({
          utilisateur: body.utilisateur,
          titre: body.titre,
          contenu: body.contenu,
          images: body.images 
        });

        // Save the new post to the database
        const savedPost = await newPost.save();

        // Respond with the created post
        return Response.json(savedPost);
    }catch (error) {
        console.error('Erreur lors de la création du post :', error);
        return Response.json({ message: 'Erreur interne du serveur' }, { status: HttpStatusCode.NotFound });
      }
  }
// get all posts
 async function GET(req,res){
  try{
    const posts = await Post.find();
    if(posts.length >= 1){
      return Response.json(posts)
    }
    return Response.json({message: "no post found"}) 
  }catch(error){
    console.log('erreur: ',error);
    return new Response.json({message: `Erreur interne du serveur: ${error}`})
  }
 } 

module.exports = { POST, GET };
