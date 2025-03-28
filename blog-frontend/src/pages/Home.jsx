import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tous les blogs</h1>
      <input
        type="text"
        placeholder="Rechercher un article..."
        className="w-full p-2 mb-4 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="space-y-4">
        {filteredPosts.map(post => (
          <div key={post._id} className="p-4 bg-white rounded shadow">
            <Link to={`/post/${post._id}`} className="text-xl font-semibold text-blue-600">{post.title}</Link>
            <p>{post.content.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;