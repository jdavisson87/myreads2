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
    showingbooks: [],
    checkedOut: []
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
          if(results.length==0){
            this.setState({ showingBooks: [] })
          }else if(results.length>0){
            results.map(book=>{
              if(!book.shelf){
              book.shelf='none'}
            })
            this.setState({ showingBooks : results })
          }else{
            this.setState({ showingBooks: [] })
          }
      })
  }else{
    this.setState({ showingBooks: [] })
  }
}

removeFromShelf = (book) => {
  if (book.shelf === 'current'){
    this.setState((state)=>({
      current: this.state.current.filter((b)=>b.id !==book.id)
    }))
  }else if(book.shelf === 'want'){
    this.setState((state)=>({
      want: this.state.want.filter((b)=>b.id !==book.id)
    }))
  }else if (book.shelf === 'read'){
    this.setState((state)=>({
      read: this.state.read.filter((b)=>b.id !==book.id)
    }))
  }
}

updateShelf = (book, shelf) =>{
  if(shelf !== 'none' && book.shelf !== shelf){
    this.setState(state => ({ checkedOut: state.checkedOut.concat([book])}));
    if(shelf==='current'){
      this.removeFromShelf(book);
      book.shelf=shelf;
      this.setState( state=> ({
        current: state.current.concat([book])
      }))
    }else if(shelf==='want'){
      this.removeFromShelf(book);
      book.shelf=shelf;
      this.setState( state=> ({
        want: state.want.concat([book])
      }))
    }else if(shelf==='read'){
      this.removeFromShelf(book);
      book.shelf=shelf;
      this.setState( state=> ({
        read: state.read.concat([book])
      }))
    }
  }else if(shelf ==='none' && book.shelf !== shelf){
    this.removeFromShelf(book);
    book.shelf='none';
    this.setState(state =>({ checkedOut: this.state.checkedOut.filter((b)=>b.id !==book.id)}))
  }
  console.log(book.shelf)
  BooksAPI.update(book,shelf).then(console.log('changed',book,shelf))
}


searchreset = () =>{
  this.setState({ showingBooks: [] })
}

  render() {
    return (
      <div className="App">
        <div className="main">
          <div className='head'>
            <h1>My Reads 2.0</h1>
            <div className='my-icon'>
              <div className='my-icon-img'>
              </div>
            </div>
          </div>
          <div className='body'>
            <Route exact path='/' render={() =>(
              <BookShelf
              shelf ={ this.state.current }
              want={ this.state.want }
              read={ this.state.read }
            />
            )}/>
            <Route
              exact path='/search'
              render={() => (
                <Search
                books={ this.state.showingBooks }
                updateSearch= { this.updateSearch }
                searchReset= { this.searchreset }
                updateShelf= { this.updateShelf }
              />
            )}/>
            <div className='credit'>
              <p>
                Icons made by <a href="https://www.flaticon.com/authors/simpleicon" title="SimpleIcon">SimpleIcon</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
