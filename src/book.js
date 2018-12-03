import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Book(props) {
  if (props.books){
    if(props.books.length>0){
    return (
      <ol className='books'>
        {props.books.map((books)=>
          <li className='book' key={books.id}>
            <div className="book-cover" style={{ backgroundImage: `url(${(books.imageLinks) ? (books.imageLinks.thumbnail) : "https://dummyimage.com/128X170/000/dadbe3.jpg&text=NO+IMAGE"})` }}>
            </div>
            <p className='title'>{books.title}</p>
            <p className='author'>{books.authors ? books.authors[0] : 'no Author'}</p>
          </li>
        )}
      </ol>
    )}else{
    return(
      <div>
        <p>no results</p>
      </div>
    )
  }
}else{
    return(
      <div>nothing to return 2</div>
    )
  }
}

export default Book
