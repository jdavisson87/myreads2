const INITIAL_STATE = {
  books: [],
  current: [],
  want: [],
  read: [],
  showingBooks: [],
};

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_BOOKS':
      return {
        ...state,
        current: action.payload,
      };

    default:
      return state;
  }
};

export default booksReducer;
