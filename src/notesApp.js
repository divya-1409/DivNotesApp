import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import firebase from './firebase';

function App() {
    const [notes, setNotes] = useState([]);
    const navigate = useNavigate(); // Initialize useNavigate hook

    const addNote = (note) => {
        setNotes([...notes, note]);
    };

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    const handleLogout = () => {
        // Clear local storage
        localStorage.clear();
        // Sign out from Firebase
        firebase.auth().signOut();
        // Navigate to the login page
        navigate('/login');
    };
    
    const isLoggedIn = localStorage.getItem('isLoggedIn')
   
   
    return (
        <div className="App">
            <div className="header">
                <h1 className="title">Notes App</h1>
                {isLoggedIn && ( // Use curly braces to enclose JavaScript code
                    <button onClick={handleLogout} className="logout-btn">Logout</button>
                )}
            </div>
    
            <NoteForm addNote={addNote} />
            <NoteList notes={notes} deleteNote={deleteNote} />
        </div>
    );
}

export default App;
