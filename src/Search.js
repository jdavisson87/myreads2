import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './book'

class Search extends Component {
  render(){
    /*console.log(this.props.books)*/
    return(
      <div className='search'>
        <p>Search for books</p>
        <input type='text' className='query' onChange={event=>{this.props.updateSearch(event.target.value)}} placeholder='Type in book, author, or genre'></input>
        <ol className='book'>
          <Book books={this.props.books}/>
        </ol>
        <div className='credit'>
          <p>
            Icons made by <a href="https://www.flaticon.com/authors/simpleicon" title="SimpleIcon">SimpleIcon</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
          </p>
        </div>
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
