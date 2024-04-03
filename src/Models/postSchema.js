const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'users', required: true },
  titre: { type: String, required: true },
  contenu: { type: String, required: true },
  images: [{ type: String }], 
  date_publication: { type: Date, default: Date.now }
});


const Post =mongoose.models.Post || mongoose.model('Post', postSchema);

module.exports = Post;