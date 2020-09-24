import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Books from '../Books/Books.container';
import {
  BookShelfCtr,
  SearchIconCtr,
  BookShelfTitle,
  ShelfTitle,
} from './BookShelves.styles';

const BookShelves = ({ currentBooks, want, read, updateShelf }) => (
  <BookShelfCtr>
    <SearchIconCtr>
      <Link to="/search" />
    </SearchIconCtr>
    <BookShelfTitle>My Bookshelf</BookShelfTitle>
    <div>
      <ShelfTitle> Current books</ShelfTitle>
      {currentBooks.length > 0 ? (
        <Books books={currentBooks} updateShelf={updateShelf} />
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

const mapStateToProps = (state) => ({
  currentBooks: state.books.current,
});

export default connect(mapStateToProps)(BookShelves);
