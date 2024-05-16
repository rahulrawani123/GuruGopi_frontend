// Login_Contact_data.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login_Contact_data = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'rahul' && password === '123') {
      localStorage.setItem('login', true);
      navigate('/contact_data');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <br />
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full ">
        <h2 className="text-2xl mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
            />
          </div>
          {error && <div className="text-red-500">{error}</div>}
          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
      <br />
    </div>
  );
};

export default Login_Contact_data;
