import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../services/api';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCurrentUser(user);

    axios.get(`/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleEdit = () => {
    navigate(`/edit/${post._id}`);
  };

  const handleDelete = async () => {
    const confirm = window.confirm("Es-tu sûr de vouloir supprimer cet article ?");
    if (!confirm) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`/posts/${post._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/blog");
    } catch (err) {
      console.error("Erreur lors de la suppression :", err);
      alert("Erreur lors de la suppression du post.");
    }
  };

  if (!post) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-gray-600 text-lg animate-pulse">Chargement...</p>
      </div>
    );
  }
  // console.log("author", post.userId)
  // console.log("user", currentUser.id)
  // console.log("user2", currentUser.id == post.userId)

  const isAuthor = currentUser && post.userId === currentUser.id;

  return (
    <div className="max-w-4xl mx-auto bg-white bg-opacity-90 shadow-xl rounded-2xl p-8 mt-12 mb-16">
      {/* Boutons */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          ← Retour aux articles
        </button>

        {isAuthor && (
          <div className="flex gap-2">
            <button
              onClick={handleEdit}
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
            >
              ✏️ Modifier
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
            >
              🗑 Supprimer
            </button>
          </div>
        )}
      </div>

      {/* Titre */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{post.title}</h1>

      {/* Image */}
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-xl mb-6 object-cover"
        />
      )}

      {/* Contenu */}
      <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
        {post.content}
      </div>

      {/* Auteur & date */}
      <div className="mt-8 text-sm text-gray-500 italic">
        {post.author?.email && (
          <p>Écrit par <span className="font-medium">{post.author.email}</span></p>
        )}
        {post.createdAt && (
          <p className="text-gray-400">
            Publié le {new Date(post.createdAt).toLocaleDateString('fr-FR')}
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
