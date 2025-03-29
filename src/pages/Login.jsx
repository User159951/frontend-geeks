import React, { useState } from 'react';
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error before submitting

    try {
      const res = await axios.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError('Email ou mot de passe incorrect. Veuillez réessayer.'); // Display error message
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full space-y-4 bg-white bg-opacity-75 p-6 rounded-lg shadow-md"
      >
        <h2 className="text-xl font-bold text-center">Connexion</h2>

        {error && (
          <div className="text-red-500 text-sm text-center">
            {error} {/* Display error message */}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Se connecter
        </button>

        <p className="text-center">
          Tu n'as pas de compte ?
        </p>
        
        {/* Button to navigate to the registration page */}
        <button
          type="button"
          onClick={() => navigate('/register')}
          className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Inscription
        </button>
      </form>
    </div>
  );
};

export default Login;
