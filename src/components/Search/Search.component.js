import React from 'react';
import { Link } from 'react-router-dom';
import Book from '../../container/Books/Books.container';
import { SearchCtr, QueryCtr, HomeIconCtr } from './Search.styles';

const Search = ({ updateSearch, books, updateShelf, searchReset }) => (
  <SearchCtr>
    <p>Search for books</p>
    <QueryCtr
      type="text"
      onChange={(event) => {
        updateSearch(event.target.value);
      }}
      placeholder="Type in book, author, or genre"
    />
    <Book books={books} updateShelf={updateShelf} />
    <HomeIconCtr>
      <Link to="/" onClick={searchReset} />
    </HomeIconCtr>
  </SearchCtr>
);

export default Search;
