import * as actionTypes from './actionTypes';
import * as BooksAPI from '../../utils/BooksAPI';

export const setCurrentBooks = (currentBook) => ({
  type: actionTypes.SET_CURRENT_BOOKS,
  payload: currentBook,
});

export const setWantBooks = (wantBook) => ({
  type: actionTypes.SET_WANT_BOOKS,
  payload: wantBook,
});

export const setReadBooks = (readBook) => ({
  type: actionTypes.SET_READ_BOOKS,
  payload: readBook,
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
        dispatch(filterBooks(books));
      })
      .catch((err) => {
        dispatch(fetchBooksFailure(err));
      });
  };
};

const filterBooks = (books) => {
  return (dispatch) => {
    const current = books.filter((book) => book.shelf === 'currentlyReading');
    const want = books.filter((book) => book.shelf === 'wantToRead');
    const read = books.filter((book) => book.shelf === 'read');
    dispatch(setFilterBooks(books, want, current, read));
  };
};

const setFilterBooks = (books, want, current, read) => ({
  type: actionTypes.SET_FILTERED_BOOKS,
  books: books,
  want: want,
  current: current,
  read: read,
});
