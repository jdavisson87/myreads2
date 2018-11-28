import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';
import Search from './Search';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    books: [],
    current: [],
    want: [],
    read: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books)=>{
      this.setState({ books })
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Route exact path='/' render={() =>(
          <BookShelf/>
        )}/>
        <Route
          exact path='/search'
          render={() => (
            <Search
            books= { this.state.books }/>
          )}/>
        </header>
      </div>
    );
  }
}

export default App;
