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
        <div className="main">
          <div className='head'>
            <h1>My Reads 2.0</h1>
            <div className='my-icon'>
              <div className='my-icon-img'/>
            </div>
          </div>
          <Route exact path='/' render={() =>(
            <BookShelf/>
          )}/>
          <Route
            exact path='/search'
            render={() => (
              <Search
              books= { this.state.books }/>
            )}/>
        </div>
      </div>
    );
  }
}

export default App;
