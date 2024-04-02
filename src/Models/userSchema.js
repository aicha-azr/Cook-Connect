//import mongoose from 'mongoose';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const userSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mot_de_passe: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
module.exports = User;
