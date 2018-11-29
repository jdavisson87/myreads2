import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BookShelf extends Component {
  render(){
    return(
      <div className='bookshelf'>
        <div className='search-icon'>
          <Link
            to='/search'
          />
        </div>
      </div>
    )
  }
}

export default BookShelf
