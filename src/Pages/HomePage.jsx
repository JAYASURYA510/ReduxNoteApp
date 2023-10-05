import React from 'react';
import { useSelector } from 'react-redux';
import NoteForm from '../Components/NoteForm';
import NoteList from '../Components/NoteList';

const HomePage = () => {
  const notes = useSelector((state) => state.notes);

  return (
    <div>
      <h1>Note App</h1>
      <NoteForm />
      <NoteList notes={notes} />
    </div>
  );
};

export default HomePage;
