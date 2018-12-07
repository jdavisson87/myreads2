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
        <h2>My Bookshelf</h2>
        <div>
          <p> Current books</p>
          <Shelf
            books={this.props.current}
            updateShelf={this.props.updateShelf}
          />
        </div>
        <div>
          <p>Books I want to Read</p>
          <Shelf
            books={this.props.want}
            updateShelf={this.props.updateShelf}
          />
        </div>
        <div>
          <p>Books I have Read</p>
          <Shelf
            books={this.props.read}
            updateShelf={this.props.updateShelf}
          />
        </div>
        <div>
          <p>Books in my case</p>
          <Shelf
            books={this.props.showing}
            updateShelf={this.props.updateShelf}
          />
        </div>
      </div>
    )
  }
}

export default BookShelf
