import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Books from '../Books/Books.container';
import {
  BookShelfCtr,
  SearchIconCtr,
  SearchIconLink,
  BookShelfTitle,
  ShelfTitle,
} from './BookShelves.styles';

const BookShelves = (props) => {
  const { current, want, read } = props;

  return (
    <BookShelfCtr>
      <SearchIconCtr>
        <SearchIconLink to="/search" />
      </SearchIconCtr>
      <BookShelfTitle>My Bookshelf</BookShelfTitle>
      <div>
        <ShelfTitle> Current books</ShelfTitle>
        {current.length > 0 ? (
          <Books books={current} />
        ) : (
          <div>There are currently no books on this shelf</div>
        )}
      </div>
      <div>
        <ShelfTitle>Books I want to Read</ShelfTitle>
        {want.length > 0 ? (
          <Books books={want} />
        ) : (
          <div>There are currently no books on this shelf</div>
        )}
      </div>
      <div>
        <ShelfTitle>Books I have Read</ShelfTitle>
        {read.length > 0 ? (
          <Books books={read} />
        ) : (
          <div>There are currently no books on this shelf</div>
        )}
      </div>
    </BookShelfCtr>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.books.current,
    read: state.books.read,
    want: state.books.want,
  };
};

export default withRouter(connect(mapStateToProps)(BookShelves));
