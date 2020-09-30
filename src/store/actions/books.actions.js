import * as actionTypes from './actionTypes';
import * as BooksAPI from '../../utils/BooksAPI';

export const setBookOnShelf = (book, shelf) => ({
  type: actionTypes.SET_BOOK_ON_SHELF,
  shelf: shelf,
  book: book,
});

export const fetchBooksStart = () => ({
  type: actionTypes.FETCH_BOOKS_START,
});

export const fetchBooksSuccess = (books) => ({
  type: actionTypes.FETCH_BOOKS_SUCCESS,
  // books: books.books,
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
  const current = books.filter((book) => book.shelf === 'currentlyReading');
  const want = books.filter((book) => book.shelf === 'wantToRead');
  const read = books.filter((book) => book.shelf === 'read');
  return {
    // books: books,
    want: want,
    current: current,
    read: read,
  };
};

export const updateShelves = (book, newShelf) => {
  return (dispatch) => {
    if (book.shelf === undefined) {
      book.shelf = 'none';
    }
    if (book.shelf === 'none') {
      book.shelf = newShelf;
      BooksAPI.update(book, newShelf).then(() => {
        const stateShelf = shelfSelector(newShelf);
        dispatch(setBookOnShelf(book, stateShelf));
      });
    } else if (newShelf === 'none') {
      const oldShelf = shelfSelector(book.shelf);
      book.shelf = 'none';
      BooksAPI.update(book, newShelf).then(() => {
        dispatch(removeBookFromAll(book, oldShelf));
      });
    } else {
      const oldShelf = book.shelf;
      book.shelf = newShelf;
      BooksAPI.update(book, newShelf).then(() => {
        const stateNewShelf = shelfSelector(newShelf);
        const stateOldShelf = shelfSelector(oldShelf);
        dispatch(setUpdateShelves(book, stateNewShelf, stateOldShelf));
      });
    }
  };
};

const setUpdateShelves = (book, newShelf, oldShelf) => ({
  type: actionTypes.UPDATE_SHELVES,
  book: book,
  oldShelf: oldShelf,
  newShelf: newShelf,
});

const removeBookFromAll = (book, shelf) => ({
  type: actionTypes.REMOVE_BOOK_FROM_ALL,
  book: book,
  shelf: shelf,
});

const shelfSelector = (shelf) => {
  switch (shelf) {
    case 'currentlyReading':
      return 'current';
    case 'wantToRead':
      return 'want';
    case 'read':
      return 'read';
    default:
      return 'none';
  }
};

export const searchReset = () => ({
  type: actionTypes.SEARCH_RESET,
});

export const fetchSearchStart = () => ({
  type: actionTypes.FETCH_SEARCH_START,
});

export const fetchSearchSuccess = (results) => ({
  type: actionTypes.FETCH_SEARCH_SUCCESS,
  showingBooks: results,
});

export const fetchSearchFail = (err) => ({
  type: actionTypes.FETCH_SEARCH_FAIL,
  error: err,
});

const correctShelf = (book) => {
  if (!book.shelf) {
    book.shelf = 'none';
  }
  return book;
};

export const fetchSearchResults = (query) => {
  return (dispatch) => {
    dispatch(fetchSearchStart());
    BooksAPI.search(query).then((results) => {
      if (results) {
        if (results.length === 0) {
          dispatch(fetchSearchSuccess([]));
        } else if (results.length > 0) {
          const res = results.map((book) => correctShelf(book));
          dispatch(fetchSearchSuccess(res));
        } else {
          dispatch(fetchSearchSuccess([]));
        }
      } else {
        dispatch(fetchSearchSuccess([]));
      }
    });
  };
};
