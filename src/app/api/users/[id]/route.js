const { NextResponse } = require('next/server');
const { HttpStatusCode } = require('next/server');
const User = require('../../../../Models/userSchema');
const bcrypt = require('bcryptjs');
const { default: Connect } = require('../../../../Connection/connection');
 Connect();

// update a user
async function PUT(req, { params }) {
    try {
        await Connect();
        const user = await User.findById(params.id);
        if (user) {
            const body = await req.json();
            if (body.nom) {
                user.nom = body.nom;
            }
            if (body.email) {
                user.email = body.email;
            }
            await user.save();
            return NextResponse.json({ user });
        }
        return NextResponse.json({ message: `Utilisateur ${params.id} non trouvé` }, { status: HttpStatusCode.NotFound });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: HttpStatusCode.BadRequest });
    }
}


// get one user
async function GET(req, { params }) {

    try {
        const user = await User.findById(params.id);
        if (user) {
            return NextResponse.json({ user });
        }
        return NextResponse.json({ message: `Utilisateur ${params.id} non trouvé` }, { status: 404 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
// delete a user
async function DELETE(req, { params }) {
    try {
        await Connect();
        const user = await User.findByIdAndDelete(params.id); // Ajouter des parenthèses autour de params.id
        if (!user) {
            return NextResponse.json({ message: `Utilisateur ${params.id} non trouvé` }, { status: 404 });
        }
        await user.remove();
        return NextResponse.json({message: "user deleted successfully"});
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

module.exports = { PUT, GET, DELETE };