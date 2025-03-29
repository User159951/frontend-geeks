import React, { useState } from 'react';
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/posts', { title, content })
      .then(() => navigate('/dashboard'))
      .catch(err => console.error(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg space-y-6">
        <h2 className="text-3xl font-bold text-center text-blue-600">Créer un article de blog</h2>
        
        {/* Title Input */}
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">Titre de l'article</label>
          <input 
            type="text" 
            id="title" 
            placeholder="Entrez le titre de l'article" 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" 
            required 
          />
        </div>
        
        {/* Content Input */}
        <div>
          <label htmlFor="content" className="block text-lg font-medium text-gray-700">Contenu de l'article</label>
          <textarea 
            id="content" 
            placeholder="Rédigez votre contenu ici..." 
            value={content} 
            onChange={e => setContent(e.target.value)} 
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 h-56 resize-none" 
            required 
          />
        </div>
        
        {/* Submit Button */}
        <button type="submit" className="w-full py-3 mt-4 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-200">
          Publier l'article
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
