import Connect from '@/Connection/connection';
import Like from '@/Models/likeSchema';
import { NextResponse } from 'next/server';
Connect();

// delete a like
async function DELETE(req, {params}){
    try{
        const like = await Like.findByIdAndDelete(params.id);
        if (!like) {
            return NextResponse.json({ message: `like ${params.id} non trouvé` });
        }
        await like.remove();
        return NextResponse.json({message: "like deleted successfully"});
    }catch(error){
        console.error('Erreur lors de la création du like :', error);
        return Response.json({ message: 'Erreur interne du serveur' });
    }
}
module.exports = {DELETE}