export const addNote = (note) => {
    return {
      type: 'ADD_NOTE',
      payload: note,
    };
  };
  
  export const deleteNote = (noteId) => {
    return {
      type: 'DELETE_NOTE',
      payload: noteId,
    };
  };
  
  export const editNote = (noteId, updatedNote) => {
    return {
      type: 'EDIT_NOTE',
      payload: {
        id: noteId,
        note: updatedNote,
      },
    };
  };
  