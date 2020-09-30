import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Books from '../../container/Books/Books.container';
import * as actions from '../../store/actions/books.actions';
import { SearchCtr, QueryCtr, HomeIconCtr } from './Search.styles';

const Search = (props) => {
  const { searchReset, searchResults, books } = props;

  return (
    <SearchCtr>
      <p>Search for books</p>
      <QueryCtr
        type="text"
        onChange={(event) => {
          searchResults(event.target.value);
        }}
        placeholder="Type in book, author, or genre"
      />
      <Books books={books} />
      <HomeIconCtr>
        <Link to="/" onClick={searchReset} />
      </HomeIconCtr>
    </SearchCtr>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.books.showingBooks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchResults: (query) => dispatch(actions.fetchSearchResults(query)),
    searchReset: () => dispatch(actions.searchReset()),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
);
