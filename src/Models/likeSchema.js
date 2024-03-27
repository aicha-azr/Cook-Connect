const mongoose  = require('mongoose');

const likeSchema = new mongoose.Schema({
  utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  publication: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  date_creation: { type: Date, default: Date.now }
});

const Like = mongoose.models.Like || mongoose.model('Like', likeSchema);

module.exports = Like;