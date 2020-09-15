import React from 'react';
import { Link } from 'react-router-dom';
import Book from '../../container/Books/Books.container';

const Search = ({ updateSearch, books, updateShelf, searchReset }) => (
  <div className="search">
    <div className="search-input">
      <p>Search for books</p>
      <input
        type="text"
        className="query"
        onChange={(event) => {
          updateSearch(event.target.value);
        }}
        placeholder="Type in book, author, or genre"
      />
    </div>
    <Book books={books} updateShelf={updateShelf} />
    <div className="home-icon">
      <Link to="/" onClick={searchReset} />
    </div>
  </div>
);

export default Search;
