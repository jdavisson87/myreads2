import React from 'react';
import { Link } from 'react-router-dom';
import Book from '../book';

const BookShelf = (props) => (
  <div className="bookshelf">
    <div className="search-icon">
      <Link to="/search" />
    </div>
    <h2 className="bookshelf-title">My Bookshelf</h2>
    <div>
      <h3 className="shelf-title"> Current books</h3>
      {props.current.length > 0 ? (
        <Book books={props.current} updateShelf={props.updateShelf} />
      ) : (
        <div>There are currently no books on this shelf</div>
      )}
    </div>
    <div>
      <h3 className="shelf-title">Books I want to Read</h3>
      {props.want.length > 0 ? (
        <Book books={props.want} updateShelf={props.updateShelf} />
      ) : (
        <div>There are currently no books on this shelf</div>
      )}
    </div>
    <div>
      <h3 className="shelf-title">Books I have Read</h3>
      {props.read.length > 0 ? (
        <Book books={props.read} updateShelf={props.updateShelf} />
      ) : (
        <div>There are currently no books on this shelf</div>
      )}
    </div>
  </div>
);

export default BookShelf;
