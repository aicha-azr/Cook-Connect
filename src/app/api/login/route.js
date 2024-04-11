import jwt from 'jsonwebtoken';
import User from '../../../Models/userSchema';
import Connect from '../../../Connection/connection';
import bcrypt from 'bcryptjs';
import { setCookie } from 'cookie'; // Importez seulement la fonction setCookie
const secret = process.env.SECRET_KEY;
async function POST(req, res) {
    const body = await req.json();
    try {
        await Connect(); // Assurez-vous que la connexion est établie
        const user = await User.findOne({ email: body.email });
        console.log(user);
        if (!user) {
            console.log({ message: "no user found" });
            return Response.json({ message: "no user found" });
        }

        const validPassword = await bcrypt.compare(body.mot_de_passe, user.mot_de_passe);
        if (!validPassword) {
            return res.json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id, nom: user.nom }, secret, { expiresIn: '1h' });
       
return Response.json({token})
       

    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
        return Response.json({ message: 'Erreur interne du serveur' });
    }
}
module.exports = { POST };
