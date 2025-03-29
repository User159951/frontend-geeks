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
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 space-y-4">
      <h2 className="text-xl font-bold">Créer un blog</h2>
      <input type="text" placeholder="Titre" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 border" required />
      <textarea placeholder="Contenu" value={content} onChange={e => setContent(e.target.value)} className="w-full p-2 border h-40" required />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Publier</button>
    </form>
  );
};

export default CreatePost;