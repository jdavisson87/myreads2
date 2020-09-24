import { updateObject } from '../../utils/utility';
import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  books: [],
  current: [],
  want: [],
  read: [],
  showingBooks: [],
  isLoading: false,
  error: null,
};

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BOOKS_START:
      return updateObject(state, { isLoading: true });
    case actionTypes.FETCH_BOOKS_SUCCESS:
      return updateObject(state, { books: action.books, isLoading: false });
    case actionTypes.FETCH_BOOKS_FAIL:
      return updateObject(state, { error: action.error, isLoading: false });
    case actionTypes.SET_CURRENT_BOOKS:
      const updatedCurrentBooks = updateObject(state.current, action.payload);
      const updateCurrentState = { current: updatedCurrentBooks };
      return updateObject(state, updateCurrentState);
    case actionTypes.SET_WANT_BOOKS:
      const updateWantBooks = updateObject(state.want, action.payload);
      const updateWantState = { want: updateWantBooks };
      return updateObject(state, updateWantState);
    case actionTypes.SET_READ_BOOKS:
      const updateReadBooks = updateObject(state.read, action.payload);
      const updateReadState = { read: updateReadBooks };
      return updateObject(state, updateReadState);
    case actionTypes.SET_FILTERED_BOOKS:
      const filteredState = {
        books: action.books,
        current: action.current,
        want: action.want,
        read: action.read,
      };
      return updateObject(state, filteredState);
    default:
      return state;
  }
};

export default booksReducer;
