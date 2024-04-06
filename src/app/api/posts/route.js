import Connect from '../../../Connection/connection';
import Post from '../../../Models/postSchema';
import User from '../../../Models/userSchema';
// add a post
  async function POST(req, res) {
    await Connect();
    try {
        const body = await req.json();
        const newPost = new Post({
          user: body.user,
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
  async function GET(req, res) {
    await Connect();

    try {
      const posts = await Post.find().populate('user'); // Correct the field name to 'user'
      console.log("postssss");
      
      if (posts.length >= 1) {
        return Response.json(posts);
      }
      return Response.json({ message: "no post found" });
    } catch (error) {
      console.error('erreur: ', error);
      return Response.status(500).json({ message: `Erreur interne du serveur: ${error}` });
    }
  }


module.exports = { POST, GET };
