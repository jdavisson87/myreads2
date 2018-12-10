import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

class BookShelf extends Component {
  render(){
    return(
      <div className='bookshelf'>
        <div className='search-icon'>
          <Link
            to='/search'
          />
        </div>
        <h2 className='bookshelf-title'>My Bookshelf</h2>
        <div>
          <h3 className='shelf-title'> Current books</h3>
          <Shelf
            books={this.props.current}
            updateShelf={this.props.updateShelf}
          />
        </div>
        <div>
          <h3 className='shelf-title'>Books I want to Read</h3>
          <Shelf
            books={this.props.want}
            updateShelf={this.props.updateShelf}
          />
        </div>
        <div>
          <h3 className='shelf-title'>Books I have Read</h3>
          <Shelf
            books={this.props.read}
            updateShelf={this.props.updateShelf}
          />
        </div>
      </div>
    )
  }
}

export default BookShelf
