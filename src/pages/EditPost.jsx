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
      .then(() => navigate('/dashboard'))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 space-y-4">
      <h2 className="text-xl font-bold">Modifier le blog</h2>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 border" required />
      <textarea value={content} onChange={e => setContent(e.target.value)} className="w-full p-2 border h-40" required />
      <button type="submit" className="bg-yellow-600 text-white px-4 py-2 rounded">Mettre à jour</button>
    </form>
  );
};

export default EditPost;