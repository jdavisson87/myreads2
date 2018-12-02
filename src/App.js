import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
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
          <div className='body'>
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
        <div>Icons made by <a href="https://www.flaticon.com/authors/simpleicon" title="SimpleIcon">SimpleIcon</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      </div>
    );
  }
}

export default App;
