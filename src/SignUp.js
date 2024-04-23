// SignUp.js
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import firebase from './firebase';
import notesIcon from './Auth.jpeg';

function SignUp() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Function to fetch email from URL and set it in the state
    const fetchEmailFromURL = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const userEmail = urlParams.get('email');
      if (userEmail) {
        setEmail(userEmail);
      }
    };

    fetchEmailFromURL();
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // If user is successfully created, navigate to login page
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (

    <div className="auth-container">
        <h1 className="auth-title">DivNotes</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img src={notesIcon} alt="Notes Icon" style={{ width: '200px', height: '150px' }} />
      </div>
      <h2 className="auth-title">Sign Up</h2>
      <form onSubmit={handleSignUp} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-input"
          disabled='true'
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-input"
        />
        <button type="submit" className="auth-btn">Sign Up</button>
      </form>
      {error && <p className="error-msg">{error}</p>}
    </div>
  );
}

export default SignUp;
