// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from './firebase';
import notesIcon from './Auth.jpeg'; // Import the image

function Login() {
    const navigate = useNavigate(); // Initialize useNavigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
       // If login is successful, store login status in local storage and navigate to /notesapp
       localStorage.setItem('isLoggedIn', true);
      // If login is successful, navigate to /notesapp
      navigate('/');
      console.log('logedin');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        // User does not exist, show message and offer to sign up
        setError('User does not exist. Would you like to create an account?');
      } else {
        // Other login errors
        setError(error.message);
      }
    }
  };

  return (
    <div className="auth-container">
        <h1 className="auth-title">DivNotes</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img src={notesIcon} alt="Notes Icon" style={{ width: '200px', height: '150px' }} />
      </div>
      <h2 className="auth-title">Login</h2>
      <form onSubmit={handleLogin} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-input"
        />
        <button type="submit" className="auth-btn">Login</button>
      </form>
      {error && <p className="error-msg">{error}</p>}
      {/* Link to SignUp page */}
      <p>Don't have an account? <a href="/verifiyEmail">Sign Up</a></p> 
      <a href="/offlineModeNotesApp" className="off-button">Try DivNotes</a>

    </div>
  );
}

export default Login;
