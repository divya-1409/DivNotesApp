// NoteList.js
import React from 'react';
function NoteList({ notes, deleteNote }) {
    return (
      <div className="note-list">
        {notes.slice(0).reverse().map(note => (
          <div key={note.id} className="note">
            <h2 className="note-title">{note.title}</h2>
            <p className="note-content">{note.content}</p>
            <p className="note-timestamp">Created: {new Date(note.timestamp).toLocaleString()}</p>
            <button onClick={() => deleteNote(note.id)} className="delete-btn">Delete</button>
          </div>
        ))}
      </div>
    );
  }
  
  export default NoteList;