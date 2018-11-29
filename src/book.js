import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Book(props) {
  return (
    <ol className='books'>
      {props.books.map((books)=>
        <li className='book' key={books.id}>{books.title}</li>
      )}
    </ol>
  )
}

export default Book
