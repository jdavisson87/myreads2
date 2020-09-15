import React from 'react';
import { Link } from 'react-router-dom';
import Books from '../Books/Books.container';

const BookShelves = ({ current, want, read, updateShelf }) => (
  <div className="bookshelf">
    <div className="search-icon">
      <Link to="/search" />
    </div>
    <h2 className="bookshelf-title">My Bookshelf</h2>
    <div>
      <h3 className="shelf-title"> Current books</h3>
      {current.length > 0 ? (
        <Books books={current} updateShelf={updateShelf} />
      ) : (
        <div>There are currently no books on this shelf</div>
      )}
    </div>
    <div>
      <h3 className="shelf-title">Books I want to Read</h3>
      {want.length > 0 ? (
        <Books books={want} updateShelf={updateShelf} />
      ) : (
        <div>There are currently no books on this shelf</div>
      )}
    </div>
    <div>
      <h3 className="shelf-title">Books I have Read</h3>
      {read.length > 0 ? (
        <Books books={read} updateShelf={updateShelf} />
      ) : (
        <div>There are currently no books on this shelf</div>
      )}
    </div>
  </div>
);

export default BookShelves;
