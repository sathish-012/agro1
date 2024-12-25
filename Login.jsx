import React, { useState } from 'react';
import logo from './img/logo.png';
import './Login.css';
import ved from './vedio/bgved.mp4';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError('');
  };
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

  
    
    // Simple validation
    let isValid = true;
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      isValid = false;
    }

    if (isValid) {
      // Handle login logic here (e.g., API call)
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  return (
    <div className='m1'>
      <video src={ved} autoPlay loop muted /> {/* Added 'muted' for auto play */}
      <div className='l2'>
      <div className="container">
        <img src={logo} alt="Agro Logo" className="logo" />
        <h1 className='h1'>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <p className='e1'>E-mail:</p>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
            {emailError && <span className="error">{emailError}</span>}
          </div>
          <div>
            <p className='p1'>Password:</p>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
            />
            {passwordError && <span className="error">{passwordError}</span>}
          </div>
          <div>
          <button className="login" type="submit">Login</button><br></br><br></br></div>
          
        </form>
        <br />
        <a href="/forget-password">Forget Password?</a><br></br><br></br>
        <p className='r1'>OR</p>
        <div className="google-btn">
        <button
            className='G1'
            onClick={() => navigate('/Register')}
            >
           <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-color-icon.png" alt="Google Logo" />
            Register with Google
        </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
