import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './book'

class Search extends Component {
  render(){
    return(
      <div className='search'>Search
        <input type='text' className='query' placeholder='Type in book, author, or genre'></input>
        <ol className='book'>
          <Book books={this.props.books}/>
        </ol>
        <Link
          to='/'
          >Home</Link>
      </div>
    )
  }
}

export default Search
