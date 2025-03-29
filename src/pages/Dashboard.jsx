import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    axios.get('/posts/mine')
      .then(res => setMyPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen py-8 pt-16"> {/* pt-16 to push content down */}
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4 text-gray-950">Mes Blogs</h1>

        {/* Posts list */}
        <div className="space-y-6">
          {myPosts.map(post => (
            <div key={post._id} className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
              <Link to={`/post/${post._id}`} className="text-xl font-semibold text-blue-600 hover:text-blue-800">
                {post.title}
              </Link>
              <p className="mt-2 text-gray-600">{post.content.slice(0, 100)}...</p>
              <div className="mt-2 space-x-2">
                <Link to={`/edit/${post._id}`} className="text-yellow-600 hover:text-yellow-700">
                  Modifier
                </Link>
                <button
                  onClick={() => handleDelete(post._id)}
                  className="text-red-600 hover:text-red-700"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  function handleDelete(id) {
    axios.delete(`/posts/${id}`)
      .then(() => setMyPosts(myPosts.filter(post => post._id !== id)))
      .catch(err => console.error(err));
  }
};

export default Dashboard;
