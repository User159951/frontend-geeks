import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/posts/${id}`)
      .then(res => {
        setTitle(res.data.title);
        setContent(res.data.content);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/posts/${id}`, { title, content })
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Modifier le blog</h2>

        {/* Title Input */}
        <input 
          type="text" 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-4"
          placeholder="Titre du blog"
          required
        />

        {/* Content Input */}
        <textarea 
          value={content} 
          onChange={e => setContent(e.target.value)} 
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-4 h-40"
          placeholder="Contenu du blog"
          required
        />

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Mettre à jour
        </button>
      </form>
    </div>
  );
};

export default EditPost;
