import * as actionTypes from './actionTypes';
import * as BooksAPI from '../../utils/BooksAPI';

export const setCurrentBooks = (currentBook) => ({
  type: actionTypes.SET_CURRENT_BOOKS,
  payload: currentBook,
});

export const setBooks = (books) => ({
  type: actionTypes.SET_BOOKS,
  payload: books,
});

export const fetchBooksStart = () => ({
  type: actionTypes.FETCH_BOOKS_START,
});

export const fetchBooksSuccess = (books) => ({
  type: actionTypes.FETCH_BOOKS_SUCCESS,
  books: books,
});

export const fetchBooksFailure = (error) => ({
  type: actionTypes.FETCH_BOOKS_FAIL,
  error: error,
});

export const fetchBooks = () => {
  return (dispatch) => {
    dispatch(fetchBooksStart());
    BooksAPI.getAll()
      .then((books) => {
        dispatch(fetchBooksSuccess(books));
      })
      .catch((err) => {
        dispatch(fetchBooksFailure(err));
      });
  };
};
