import Connect from "../../../Connection/connection";
import User from "../../../Models/userSchema";
import bcrypt from 'bcryptjs';

// Assuming you have already created an Express app and it's listening on a port

// get all users
async function GET(req, res) {
  try {
    await Connect(); // Ensure the connection is established
    const users = await User.find();
    console.log(users);
    if (users.length < 1) {
      console.log({ message: "no user found" });
      return Response.json({ message: "no user found" });
    }
    return Response.json(users);
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs:', error);
    return Response.json({ message: 'Erreur interne du serveur' });
  }
}

// add a user
async function POST(req, res) {
  try {
    await Connect(); // Ensure the connection is established
    const body = await req.json();

    if (!body.mot_de_passe) {
      return Response.status(400).json({ message: 'Le mot de passe est requis' });
    }
    const hashedPassword = await bcrypt.hash(body.mot_de_passe, 10);
    
    const newUser = new User({ nom: body.nom, email: body.email, mot_de_passe: hashedPassword });

    await newUser.save();

    return Response.json(newUser); // 201 Created status code for successful creation
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur :', error);
    return Response.json({ message: 'Erreur interne du serveur' });
  }
}
 /*async function POST(req) {
  try {
    const body = await req.json();
    const userData = body.formData;

    //Confirm data exists
    if (!userData?.email || !userData.mot_de_passe) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // check for duplicate emails
    const duplicate = await User.findOne({ email: userData.email })
      .lean()
      .exec();

    if (duplicate) {
      return NextResponse.json({ message: "Duplicate Email" }, { status: 409 });
    }

    const hashPassword = await bcrypt.hash(userData.mot_de_passe, 10);
    userData.mot_de_passe = hashPassword;

    await User.create(userData);
    return NextResponse.json({ message: "User Created." }, { status: 201 });
  } catch (error) {
    console.log(err);
    console.log(error)
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}*/
export { GET, POST };
