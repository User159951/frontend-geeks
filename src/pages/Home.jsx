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
    <div className="min-h-screen py-8 pt-16"> {/* pt-16 pushes content down */}
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Tous les blogs</h1>
        
        {/* Search input */}
        <input
          type="text"
          placeholder="Rechercher un article..."
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Posts list */}
        <div className="space-y-6">
          {filteredPosts.map(post => (
            <div key={post._id} className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
              <Link to={`/post/${post._id}`} className="text-xl font-semibold text-blue-600 hover:text-blue-800">
                {post.title}
              </Link>
              <p className="mt-2 text-gray-600">{post.content.slice(0, 100)}...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
