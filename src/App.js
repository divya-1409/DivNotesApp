// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import firebase from './firebase';
import NotesApp from './notesApp';
import Login from './Login';
import SignUp from './SignUp';
import ProtectedRoute from './ProtectedRoute'; // Import ProtectedRoute component
import VerifiyEmail from './verifyEmail';

function App() {
  
  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/" Component={ProtectedRoute(NotesApp)} />
        <Route path="/offlineModeNotesApp" Component={NotesApp} />
        <Route path="/verifiyEmail" Component={VerifiyEmail} />
      </Routes>
    </Router>
  );
}


export default App;

