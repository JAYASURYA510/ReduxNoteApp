import React from 'react';
import { useSelector } from 'react-redux';
import NoteCard from '../Components/NoteCard';
const NotePage = () => {
  const notes = useSelector((state) => state.notes);

  return (
    <div>
      <h1 className='Th1'> My Notes </h1>
      <div className="row">
      {notes.map((note) => (
        <div className="col-md-4" key={note.id}>
          <NoteCard note={note} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default NotePage;