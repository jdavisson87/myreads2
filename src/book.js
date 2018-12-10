import React from 'react';
import * as BooksAPI from './utils/BooksAPI';

function Book(props) {
  if (props.books){
    if(props.books.length>0){
    return (
      <ol className='books'>
        {props.books.map((book)=>
          <li key={book.id}>
            <div className='book'>
              <div className="book-cover" style={{ backgroundImage: `url(${(book.imageLinks) ? (book.imageLinks.thumbnail) : "https://dummyimage.com/128X170/000/dadbe3.jpg&text=NO+IMAGE"})` }}>
              </div>
              <div className='shelf-changer'>
                <select className='selector' value={book.shelf} onChange={(event)=>BooksAPI.update(book, event.target.value).then(props.updateShelf(book, event.target.value))}>
                  <option value='title' disabled>Move to...</option>
                  <option value='currentlyReading'>Currently Reading</option>
                  <option value='wantToRead'>Want to Read</option>
                  <option value='read'>Finished Reading</option>
                  <option value='none'>None</option>
                </select>
              </div>
              <p className='title'>{book.title}</p>
              <p className='author'>{book.authors ? book.authors.map(author=>{return (<p>{author}</p>)}) : 'No Author Listed'}</p>
            </div>
          </li>
        )}
      </ol>
    )}else{
      return(
        <div>
          <p>Currently, there are no results.  Please enter new search criteria.</p>
        </div>
      )
  }
}else{
    return(
      <div>Please search for a book</div>
    )
  }
}

export default Book
