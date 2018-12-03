import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BookShelf extends Component {
  render(){
    return(
      <div className='bookshelf'>
        <h2>My Bookshelf</h2>
        <div className='search-icon'>
          <Link
            to='/search'
          />
        </div>
        <div className='credit'>
          <p>
            Icons made by <a href="https://www.flaticon.com/authors/simpleicon" title="SimpleIcon">SimpleIcon</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
          </p>
        </div>
      </div>
    )
  }
}

export default BookShelf
