// NoteForm.js
import React, { useState } from 'react';

function NoteForm({ addNote }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!title.trim() || !content.trim()) return;
      addNote({ id: Date.now(), title, content, timestamp: Date.now() });
      setTitle('');
      setContent('');
    };
  
    return (
      <form onSubmit={handleSubmit} className="note-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-title"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="input-content"
        ></textarea>
        <button type="submit" className="add-btn">Add Note</button>
      </form>
    );
  }
  
  export default NoteForm;