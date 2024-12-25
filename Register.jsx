import React, { useState } from 'react';
import './Register.css'; // Import the styles
import ved from './vedio/bgved.mp4';
import logo from './img/logo.png';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple validation for required fields and password match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 8) {
      setError('Password must contain at least 8 characters');
      return;
    }

    // Add more validation here if needed (email format, etc.)
    setError('');
    
    // Submit registration logic here
    console.log('Registration successful');
    navigate('/Login'); // Navigate to login page after successful registration
  };

  return (
    <div>
      <video src={ved} autoPlay loop muted /> {/* Background video */}
      <div className="auth-container">
        <img src={logo} alt="Agro Logo" className="logo" />
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="John"
            required
          />
          
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Doe"
            required
          />
          
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Must contain 8 characters"
            required
          />
          
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />
          
          {error && <p className="error">{error}</p>}

          <p>
            By continuing, you agree to our <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>.
          </p>
          
          <button type="submit" className="btn btn-green">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
