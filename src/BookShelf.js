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
        <Shelf
          books={this.props.current}
        />
        <Shelf
          books={this.props.want}
        />
        <Shelf
          books={this.props.read}
        />
      </div>
    )
  }
}

export default BookShelf
