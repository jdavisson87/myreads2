import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import Search from './Search';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
            <Search/>
          )}/>
        </header>
      </div>
    );
  }
}

export default App;
