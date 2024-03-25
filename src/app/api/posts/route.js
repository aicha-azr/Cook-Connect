import Connect from '@/Connection/connection';
import Post from '@/Models/postSchema';
await Connect();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Créer une nouvelle publication
    try {
      const { utilisateur, titre, contenu } = req.body;
      const newPost = new Post({ utilisateur, titre, contenu });
      await newPost.save();
      res.status(201).json(newPost);
    } catch (error) {
      console.error('Erreur lors de la création de la publication:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  } else if (req.method === 'GET') {
    // Obtenir toutes les publications
    try {
      const posts = await Post.find().populate('utilisateur');
      res.status(200).json(posts);
    } catch (error) {
      console.error('Erreur lors de la récupération des publications:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}

export async function getById(req, res) {
  await Connect();

  if (req.method === 'GET') {
    // Obtenir une publication par ID
    try {
      const postId = req.query.id;
      const post = await Post.findById(postId).populate('utilisateur');
      
      if (!post) {
        return res.status(404).json({ message: 'Publication non trouvée' });
      }
      
      res.status(200).json(post);
    } catch (error) {
      console.error('Erreur lors de la récupération de la publication par ID:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}

export async function update(req, res) {
  await Connect();

  if (req.method === 'PUT') {
    // Mettre à jour une publication
    try {
      const postId = req.query.id;
      const { utilisateur, titre, contenu } = req.body;
      const updatedPost = await Post.findByIdAndUpdate(postId, { utilisateur, titre, contenu }, { new: true });

      if (!updatedPost) {
        return res.status(404).json({ message: 'Publication non trouvée' });
      }

      res.status(200).json(updatedPost);
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la publication:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}

export async function remove(req, res) {
  await dbConnect();

  if (req.method === 'DELETE') {
    // Supprimer une publication
    try {
      const postId = req.query.id;
      const deletedPost = await Post.findByIdAndDelete(postId);

      if (!deletedPost) {
        return res.status(404).json({ message: 'Publication non trouvée' });
      }

      res.status(200).json({ message: 'Publication supprimée avec succès' });
    } catch (error) {
      console.error('Erreur lors de la suppression de la publication:', error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
