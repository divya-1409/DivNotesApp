
import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import notesIcon from './Auth.jpeg';

function SignUp() {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(null);

 
  const handleSendEmailVerification = async () => {
    try {
        // Append email as a query parameter to the URL
        const urlWithParams = `${process.env.REACT_APP_BASE_URL}/signup?email=${encodeURIComponent(email)}`;
        // const urlWithParams = `http://localhost:3000/signup?email=${encodeURIComponent(email)}`;

        console.log(urlWithParams);
        await firebase.auth().sendSignInLinkToEmail(email, {
          url: urlWithParams,
          handleCodeInApp: true,
        });
      setEmailSent(true);
      
      setError(null);
      alert(`Verification email has been sent to ${email}. Please check your inbox and follow the instructions to verify your email address.`);
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
      <form className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-input"
        />
    
          <button type="button" onClick={handleSendEmailVerification} className="auth-btn" disabled={emailSent}>
            Send Verification Email
          </button>
      </form>
      {error && <p className="error-msg">{error}</p>}
    </div>
  );
}

export default SignUp;
