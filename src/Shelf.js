import React, { Component } from 'react';
import Book from './book';

class Shelf extends Component {
  render(){
    if(this.props.books.length>0){
      return(
        <ol className='ind-shelf-list'>
          <Book
            books={this.props.books}
            updateShelf={this.props.updateShelf}
          />
        </ol>
      )
    }else{
      return(
        <div>There are currently no books on this shelf</div>
      )
    }
  }
}

export default Shelf
