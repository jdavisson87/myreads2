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
      const fetchedWant = state.want.concat(action.want);
      const fetchedCurrent = state.current.concat(action.current);
      const fetchedRead = state.read.concat(action.read);
      const fetchedBooks = state.books.concat(action.books);
      const filteredState = {
        books: fetchedBooks,
        current: fetchedCurrent,
        want: fetchedWant,
        read: fetchedRead,
        isLoading: false,
      };
      return updateObject(state, filteredState);
    case actionTypes.FETCH_BOOKS_FAIL:
      return updateObject(state, { error: action.error, isLoading: false });
    case actionTypes.SET_BOOK_ON_SHELF:
      const updateShelf = state[action.shelf].concat(action.book);
      return updateObject(state, {
        [action.shelf]: updateShelf,
        isLoading: false,
      });
    default:
      return state;
  }
};

export default booksReducer;
