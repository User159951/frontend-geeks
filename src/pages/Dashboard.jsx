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
    <div>
      <h1 className="text-2xl font-bold mb-4">Mes Blogs</h1>
      <div className="space-y-4">
        {myPosts.map(post => (
          <div key={post._id} className="p-4 bg-white rounded shadow">
            <Link to={`/post/${post._id}`} className="text-xl font-semibold text-blue-600">{post.title}</Link>
            <p>{post.content.slice(0, 100)}...</p>
            <div className="mt-2 space-x-2">
              <Link to={`/edit/${post._id}`} className="text-yellow-600">Modifier</Link>
              <button onClick={() => handleDelete(post._id)} className="text-red-600">Supprimer</button>
            </div>
          </div>
        ))}
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