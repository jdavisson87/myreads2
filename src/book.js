import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Book(props) {
  return (
    <ol className='books'>
      {props.books.map((books)=>
        <li className='book' key={books.id}>
          <img className='bookCover' src={books.imageLinks.smallThumbnail}/>
          <p className='title'>{books.title}</p>
          <p className='author'>{books.authors[0]}</p>
        </li>
      )}
    </ol>
  )
}

export default Book
