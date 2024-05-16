// Protected_ContactUs.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected_ContactUs = (props) => {
  const { Component } = props;
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('login');
    navigate('/login_contact_data');
  };

  useEffect(() => {
    const login = localStorage.getItem('login');
    if (!login) {
      navigate('/login_contact_data');
    }
  }, [navigate]);

  return (
    <div>
      <button className="py-2 px-5 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75" onClick={handleLogout}>Logout</button>
      <Component />
    </div>
  );
};

export default Protected_ContactUs;
