import * as actionTypes from './actionTypes';
import * as BooksAPI from '../../utils/BooksAPI';

export const setBookOnShelf = (book, shelf) => ({
  type: actionTypes.SET_BOOK_ON_SHELF,
  shelf: shelf,
  book: book,
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
  books: books.books,
  want: books.want,
  current: books.current,
  read: books.read,
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
        const updateBooks = filterBooks(books);
        dispatch(fetchBooksSuccess(updateBooks));
      })
      .catch((err) => {
        dispatch(fetchBooksFailure(err));
      });
  };
};

const filterBooks = (books) => {
  const current = books.filter((book) => book.shelf === 'current');
  const want = books.filter((book) => book.shelf === 'want');
  const read = books.filter((book) => book.shelf === 'read');
  return {
    books: books,
    want: want,
    current: current,
    read: read,
  };
};

export const updateShelves = (book, newShelf) => {
  return (dispatch) => {
    if (book.shelf === 'none') {
      book.shelf = newShelf;
      dispatch(setBookOnShelf(book, newShelf));
    } else if (newShelf === 'none') {
      book.shelf = 'none';
      dispatch(removeBookFromAll(book));
    } else {
      const oldShelf = book.shelf;
      book.shelf = newShelf;
      dispatch(setUpdateShelves(book, newShelf, oldShelf));
    }
  };
};

const setUpdateShelves = (book, newShelf, oldShelf) => ({
  type: actionTypes.UPDATE_SHELVES,
  book: book,
  oldShelf: oldShelf,
  newShelf: newShelf,
});

const removeBookFromAll = (book) => ({
  type: actionTypes.REMOVE_BOOK_FROM_ALL,
  book: book,
  shelf: book.shelf,
});
