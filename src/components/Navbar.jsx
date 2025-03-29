import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition">
        MyBlog
      </Link>

      {/* Navigation Links */}
      <div className="space-x-4">
        {token ? (
          <>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition">Dashboard</Link>
            <Link to="/create" className="text-gray-700 hover:text-blue-600 transition">Créer</Link>
            <button 
              onClick={handleLogout} 
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
            >
              Déconnexion
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-700 hover:text-blue-600 transition">Connexion</Link>
            <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
              Inscription
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
