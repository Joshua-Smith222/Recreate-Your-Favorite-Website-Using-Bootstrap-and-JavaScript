import React, { useState } from 'react';
import axios from 'axios';

export default function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset messages
    setError('');
    setMessage('');

    try {
      // Send data to backend route
      const response = await axios.post('http://localhost:5500/signup', {
        name,
        email,
        password,
      });
      setMessage(response.data.message);
    } catch (err) {
      // You can log the error here to inspect its details
      console.error(err);  // This logs the full error to the console

      // Optionally, you can show a detailed error message
      setError(err.response?.data?.message || 'Error signing up. Please try again.');
    }
  };

  return (
    <div className="container py-5" style={{ maxWidth: '600px' }}>
      <div className="card p-4" style={{ backgroundColor: '#f0f0f0' }}>
        <h2 className="text-center" style={{ color: '#6a3b9e' }}>Create Account</h2>
        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn" style={{ backgroundColor: '#6a3b9e', color: '#fff', width: '100%' }}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
