import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Book(props) {
  return (
    <ol className='book'>
      {props.books.map((books)=>
        <li key={books.id}>{books.title}</li>
      )}
    </ol>
  )
}

export default Book
