const initialState = {
    notes: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NOTE':
        return {
          ...state,
          notes: [...state.notes, action.payload],
        };
      case 'DELETE_NOTE':
        return {
          ...state,
          notes: state.notes.filter((note) => note.id !== action.payload),
        };
      case 'EDIT_NOTE':
        return {
          ...state,
          notes: state.notes.map((note) => {
            if (note.id === action.payload.id) {
              return {
                ...note,
                ...action.payload.note,
              };
            }
            return note;
          }),
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  