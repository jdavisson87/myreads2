import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BookShelf extends Component {
  render(){
    return(
      <div>BookShelf
        <Link
          to='/search'
          >Search</Link>
      </div>
    )
  }
}

export default BookShelf
