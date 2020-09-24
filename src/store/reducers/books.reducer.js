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
      const updateState = {
        current: updatedCurrentBooks,
      };
      return updateObject(state, updateState);

    default:
      return state;
  }
};

export default booksReducer;
