import React from 'react';
import Book from './book';

const Shelf = ({ books, updateShelf }) => {
  if (books.length > 0) {
    return <Book books={books} updateShelf={updateShelf} />;
  } else {
    return <div>There are currently no books on this shelf</div>;
  }
};

export default Shelf;
