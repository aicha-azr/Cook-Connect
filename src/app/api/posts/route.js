import Connect from '../../../Connection/connection';
import Post from '../../../Models/postSchema';
import User from '../../../Models/userSchema';
const mongoose = require('mongoose');
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
     
     
      const savedPost = await newPost.save();

    
      return Response.json(savedPost);
  } catch (error) {
      console.error('Erreur lors de la création du post :', error);
      return Response.json({ message: 'Erreur interne du serveur' }, { status: 500 });
  }
}


// get all posts
async function GET(req, res) {
    await Connect();

    try {
        const posts = await Post.find().populate('user'); 
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
