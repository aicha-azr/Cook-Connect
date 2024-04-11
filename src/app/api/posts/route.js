import Connect from '../../../Connection/connection';
import Post from '../../../Models/postSchema';
import User from '../../../Models/userSchema';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import middleware from '../middleware';
// add a post
  async function POST(req, res) {
    await Connect();
   
    try {
      const form = new formidable.IncomingForm();
      form.uploadDir = path.join(process.cwd(), 'public/uploads');
      form.keepExtensions = true;
  
      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error('Erreur lors du téléchargement de l\'image :', err);
          return res.status(500).json({ message: 'Erreur lors du téléchargement de l\'image' });
        }
  
        // Extract the image file
        const image = files.file;
  
        // Save the image file to a location (you can customize this part based on your requirements)
        const imagePath = image.path;

        const body = await req.json();
        const newPost = new Post({
          user: body.user,
          titre: body.titre,
          contenu: body.contenu,
          images: imagePath  
        });

        // Save the new post to the database
        const savedPost = await newPost.save();


        // Respond with the created post
        return Response.json(savedPost);
      });
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
      console.log(posts);
      if (posts.length >= 1) {
        return Response.json(posts);
      }
      return Response.json({ message: "no post found" });
    } catch (error) {
      console.error('erreur: ', error);
      return Response.status(500).json({ message: `Erreur interne du serveur: ${error}` });
    }
  }


  exports.module = {POST, GET}
