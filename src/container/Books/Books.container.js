import React from 'react';
import Book from '../../components/Book/Book.component';
import { BooksCtr } from './Books.styles';

const Books = ({ books, updateShelf }) => {
  if (books) {
    if (books.length > 0) {
      return (
        <BooksCtr>
          {books.map((b) => (
            <Book key={b.id} book={b} updateShelf={updateShelf} />
          ))}
        </BooksCtr>
      );
    } else {
      return (
        <p>
          Currently, there are no results. Please enter new search criteria.
        </p>
      );
    }
  } else {
    return <div>Please search for a book</div>;
  }
};

export default Books;
