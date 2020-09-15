import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import BookShelf from './container/BookShelf.container';
import Search from './Search';
import './App.css';

class App extends Component {
  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],
    showingbooks: [],
    isLoading: true,
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books, isLoading: false });
      this.filterBooks(books);
    });
  }

  filterBooks = (books) => {
    let current = books.filter((book) => book.shelf === 'currentlyReading');
    let want = books.filter((book) => book.shelf === 'wantToRead');
    let read = books.filter((book) => book.shelf === 'read');
    this.setState({ currentlyReading: current });
    this.setState({ wantToRead: want });
    this.setState({ read: read });
  };

  correctShelf = (book) => {
    const bookOnShelf = this.state.books.filter((b) => b.id === book.id)[0];
    book.shelf = bookOnShelf ? bookOnShelf.shelf : 'none';
    return book;
  };

  updateSearch = (query) => {
    if (query) {
      BooksAPI.search(query).then((results) => {
        if (results.length > 0) {
          results = results.map((book) => this.correctShelf(book));
          this.setState({ showingBooks: results });
        } else {
          this.setState({ showingBooks: [] });
        }
      });
    } else {
      this.setState({ showingBooks: [] });
    }
  };

  removeFromShelf = (book) => {
    switch (book.shelf) {
      case 'wantToRead':
        this.setState((state) => ({
          wantToRead: this.state.wantToRead.filter((b) => b.id !== book.id),
        }));
        break;
      case 'read':
        this.setState((state) => ({
          read: this.state.read.filter((b) => b.id !== book.id),
        }));
        break;
      default:
        this.setState((state) => ({
          currentlyReading: this.state.currentlyReading.filter(
            (b) => b.id !== book.id
          ),
        }));
        break;
    }
  };

  updateShelf = (book, newShelf) => {
    if (book.shelf !== 'none') {
      this.removeFromShelf(book);
    }
    if (book.shelf === 'none') {
      this.setState((state) => ({
        books: this.state.books.concat([book]),
      }));
    }
    if (newShelf === 'wantToRead') {
      book.shelf = newShelf;
      this.setState((state) => ({
        wantToRead: this.state.wantToRead.concat([book]),
      }));
    } else if (newShelf === 'currentlyReading') {
      book.shelf = newShelf;
      this.setState((state) => ({
        currentlyReading: this.state.currentlyReading.concat([book]),
      }));
    } else if (newShelf === 'read') {
      book.shelf = newShelf;
      this.setState((state) => ({
        read: this.state.read.concat([book]),
      }));
    } else if (newShelf === 'none') {
      book.shelf = newShelf;
      this.setState((state) => ({
        books: this.state.books.filter((b) => b.id !== book.id),
      }));
    }
  };

  searchreset = () => {
    this.setState({ showingBooks: [] });
  };

  render() {
    if (this.state.isLoading === true) {
      return (
        <div className="App">
          <div className="loading">
            <p>Loading...</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="main">
            <div className="head">
              <h1>My Reads 2.0</h1>
              <div className="my-icon">
                <div className="my-icon-img" />
              </div>
            </div>
            <div className="body">
              <Route
                exact
                path="/"
                render={() => (
                  <BookShelf
                    current={this.state.currentlyReading}
                    want={this.state.wantToRead}
                    read={this.state.read}
                    showing={this.state.books}
                    updateShelf={this.updateShelf}
                  />
                )}
              />
              <Route
                exact
                path="/search"
                render={() => (
                  <Search
                    books={this.state.showingBooks}
                    updateSearch={this.updateSearch}
                    searchReset={this.searchreset}
                    updateShelf={this.updateShelf}
                  />
                )}
              />
              <div className="credit">
                <p>
                  Icons made by
                  <a
                    href="https://www.flaticon.com/authors/simpleicon"
                    title="SimpleIcon"
                  >
                    SimpleIcon
                  </a>{' '}
                  from
                  <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                  </a>{' '}
                  is licensed by
                  <a
                    href="http://creativecommons.org/licenses/by/3.0/"
                    title="Creative Commons BY 3.0"
                    target="_blank"
                  >
                    CC 3.0 BY
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
