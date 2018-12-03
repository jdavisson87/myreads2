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
    read: [],
    showingbooks: []
  }

componentDidMount() {
  BooksAPI.getAll()
  .then((books)=>{
    if(!books.shelf){
    books.map(book=>book.shelf='none');
  }
    this.setState({ books })
  })
}

updateSearch = (query) => {
  if (query) {
    BooksAPI.search(query)
      .then(results=>{
        console.log(results)
        if(results.length>0){
          results.map(book=>{
            if(!book.shelf){
            console.log(book);
            book.shelf='none'}
          })
          this.setState({ showingBooks : results })
      }else if(results.length===0){
        this.setStaet({ showingBooks: [] })
      }
    })
  }
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
                books= { this.state.books }
                updateSearch = {this.updateSearch}
              />
            )}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
