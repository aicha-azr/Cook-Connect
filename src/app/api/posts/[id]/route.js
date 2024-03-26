import Connect from '@/Connection/connection';
import Post from '@/Models/postSchema';
import { NextResponse } from 'next/server';
Connect();

// get a post by id
async function GET(req, {params}){
    try{
        const post = await Post.findById(params.id);
        if (post) {
            return NextResponse.json({ post });
        }
        return NextResponse.json({ message: `post ${params.id} non trouvé` });
    }catch(error){
        console.error('Erreur lors de la création du post :', error);
        return NextResponse.json({ message: 'Erreur interne du serveur' });
    }
}
// update a post
async function PUT(req, { params }) {
    try {
        const post = await Post.findById(params.id);
        if (post) {
            const body = await req.json();
            if (body.titre) {
                post.titre = body.titre;
            }
            if (body.contenu) {
                post.contenu = body.contenu;
            }
            if(body.images){
                post.images = body.images;
            }
            await post.save();
            return NextResponse.json({ post });
        }
        return NextResponse.json({ message: `post ${params.id} non trouvé` }, { status: HttpStatusCode.NotFound });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: HttpStatusCode.BadRequest });
    }
}
// delete a post
async function DELETE(req, {params}){
    try{
        const post = await Post.findByIdAndDelete(params.id);
        if (!user) {
            return NextResponse.json({ message: `post ${params.id} non trouvé` }, { status: HttpStatusCode.NotFound  });
        }
        await post.remove();
        return NextResponse.json({message: "post deleted successfully"});
    }catch(error){
        console.error('Erreur lors de la création du post :', error);
        return Response.json({ message: 'Erreur interne du serveur' });
    }
}
module.exports = {GET, PUT, DELETE}