import Connect from '../../../Connection/connection';
import Post from '../../../Models/postSchema';
import User from '../../../Models/userSchema';
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});
async function POST(req, res) {
  await Connect();
  
  try {
      const { user, titre, contenu} = req.body; 
      let uploadedImages = [];

      if (req.files) {
          uploadedImages = await Promise.all(req.files.map(async (image) => {
              const cloudinaryUpload = await cloudinary.uploader.upload(image.path);
              return cloudinaryUpload.secure_url;
          }));
      }

    const newPost = new Post({
        user,
        titre,
        contenu,
        images: uploadedImages
    });
     
      // Save the new post to the database
      const savedPost = await newPost.save();

      // Respond with the created post
      return Response.json(savedPost);
  } catch (error) {
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
        console.log(posts);
        if (posts.length >= 1) {
            return Response.json(posts);
        }
        return Response.json({ message: "no post found" });
    } catch (error) {
        console.error('erreur: ', error);
        return Response.json({ message: `Erreur interne du serveur: ${error}` });
    }
}

// Exporting functions
module.exports = { POST, GET };
