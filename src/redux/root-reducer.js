import { combineReducers } from 'redux';
import booksReducer from './books/books.reducer';

export default combineReducers({
  books: booksReducer,
});
