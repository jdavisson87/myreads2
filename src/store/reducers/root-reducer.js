import { combineReducers } from 'redux';
import booksReducer from './books.reducer';

export default combineReducers({
  books: booksReducer,
});
