import React from 'react';
import { Link } from 'react-router-dom';
import Books from '../Books/Books.container';
import {
  BookShelfCtr,
  SearchIconCtr,
  BookShelfTitle,
  ShelfTitle,
} from './BookShelves.styles';

const BookShelves = ({ current, want, read, updateShelf }) => (
  <BookShelfCtr>
    <SearchIconCtr>
      <Link to="/search" />
    </SearchIconCtr>
    <BookShelfTitle>My Bookshelf</BookShelfTitle>
    <div>
      <ShelfTitle> Current books</ShelfTitle>
      {current.length > 0 ? (
        <Books books={current} updateShelf={updateShelf} />
      ) : (
        <div>There are currently no books on this shelf</div>
      )}
    </div>
    <div>
      <ShelfTitle>Books I want to Read</ShelfTitle>
      {want.length > 0 ? (
        <Books books={want} updateShelf={updateShelf} />
      ) : (
        <div>There are currently no books on this shelf</div>
      )}
    </div>
    <div>
      <ShelfTitle>Books I have Read</ShelfTitle>
      {read.length > 0 ? (
        <Books books={read} updateShelf={updateShelf} />
      ) : (
        <div>There are currently no books on this shelf</div>
      )}
    </div>
  </BookShelfCtr>
);

export default BookShelves;
