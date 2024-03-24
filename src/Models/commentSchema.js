const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  publication: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  contenu: { type: String, required: true },
  date_creation: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;