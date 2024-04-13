import Connect from '../../../../Connection/connection';
import Comment from '../../../../Models/commentSchema';
import { NextResponse } from 'next/server';
Connect();

// get a comment by id
async function GET(req, {params}){
    try{
        const comment = await Comment.findById(params.id);
        if (comment) {
            return NextResponse.json({ comment });
        }
        return NextResponse.json({ message: `commentaire ${params.id} non trouvé` });
    }catch(error){
        console.error('Erreur lors de la création du commentaire :', error);
        return NextResponse.json({ message: 'Erreur interne du serveur' });
    }
}
// update a comment
async function PUT(req, { params }) {
    try {
        const comment = await Comment.findById(params.id);
        if (comment) {
            const body = await req.json();
            if (body.contenu) {
                comment.contenu = body.contenu;
            }
            await comment.save();
            return NextResponse.json({ comment });
        }
        return NextResponse.json({ message: `commentaire ${params.id} non trouvé` }, { status: HttpStatusCode.NotFound });
    } catch (error) {
        return NextResponse.json({ message: error.message });
    }
}
// delete a comment
async function DELETE(req, {params}){
    try{
        const comment = await Comment.findByIdAndDelete(params.id);
        if (!comment) {
            return NextResponse.json({ message: `commentaire ${params.id} non trouvé` });
        }
        await comment.remove();
        return NextResponse.json({message: "comment deleted successfully"});
    }catch(error){
        console.error('Erreur lors de la création du post :', error);
        return Response.json({ message: 'Erreur interne du serveur' });
    }
}
module.exports = {GET, PUT, DELETE}