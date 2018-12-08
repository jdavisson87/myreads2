import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './book'

class Search extends Component {
  render(){
    /*console.log(this.props.books)*/
    return(
      <div className='search'>
        <div className='search-input'>
          <p>Search for books</p>
          <input type='text' className='query' onChange={event=>{this.props.updateSearch(event.target.value)}} placeholder='Type in book, author, or genre'></input>
        </div>
           <Book
            books={this.props.books}
            updateShelf={this.props.updateShelf}
          />
        <div className='home-icon'>
            <Link
              to='/'
              onClick={this.props.searchReset}
            />
        </div>
      </div>
    )
  }
}

export default Search
