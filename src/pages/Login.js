// SignInPage.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Login.css'; 
import { API_BASE_URL } from '../config';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a request to your backend to authenticate the user
      const response = await axios.post(`${API_BASE_URL}/auth/login`, { username, password });
      // Check if the authentication was successful
      if (response.data.success) {
        // If Authenticated, direct them to the dashboard page
        navigate('/dashboard');
      } else {
        // If not authenticated, display error message
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error authenticating user:', error);
      // Handle other authentication errors
      setError('An error occurred while authenticating');
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
