import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './book'

class Search extends Component {
  render(){
    return(
      <div className='search'>
        <input type='text' className='query' placeholder='Type in book, author, or genre'></input>
        <ol className='book'>
          <Book books={this.props.books}/>
        </ol>
        <div className='home-icon'>
          <Link
            to='/'
          />
        </div>
      </div>
    )
  }
}

export default Search
