import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import { Link } from 'react-router-dom';

const bbcodeToHtml = (bbcode) => {
  return bbcode
    .replace(/\[b\](.*?)\[\/b\]/gi, "<strong>$1</strong>") // Bold
    .replace(/\[i\](.*?)\[\/i\]/gi, "<em>$1</em>") // Italic
    .replace(/\[img\](.*?)\[\/img\]/gi, '<img src="$1" alt="BBCode Image" class="max-w-full h-auto rounded-lg shadow-md"/>') // Images
    .replace(/\[url=(.*?)\](.*?)\[\/url\]/gi, '<a href="$1" class="text-blue-500 underline">$2</a>'); // Links
};

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
    <div className="min-h-screen py-8 pt-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Tous les blogs</h1>

        {/* Search input */}
        <input
          type="text"
          placeholder="Rechercher un article..."
          className="w-full p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Posts list */}
        <div className="space-y-6">
          {filteredPosts.map(post => (
            <div
              key={post._id}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <Link
                to={`/post/${post._id}`}
                className="text-2xl font-semibold text-blue-600 hover:text-blue-800"
              >
                {post.title}
              </Link>

              {/* Render BBCode parsed content */}
<div
  className="mt-4 text-gray-700"
  dangerouslySetInnerHTML={{ __html: bbcodeToHtml(post.content) }}
/>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">Posté le {new Date(post.createdAt).toLocaleDateString()}</span>
                <Link to={`/post/${post._id}`} className="text-sm text-blue-600 hover:text-blue-800">Lire plus</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
