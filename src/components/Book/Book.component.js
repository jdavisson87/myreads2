import React from 'react';
import Selector from '../Selector/Selector.component';
import { BookItem, BookCover, ShelfChanger } from './Book.styles';

const Book = ({ book, updateShelf }) => {
  const { title, authors, imageLinks } = book;
  return (
    <BookItem>
      <BookCover
        style={{
          backgroundImage: `url(${
            imageLinks
              ? imageLinks.thumbnail
              : 'https://dummyimage.com/128X170/000/dadbe3.jpg&text=NO+IMAGE'
          })`,
        }}
      />
      <ShelfChanger>
        <Selector book={book} updateShelf={updateShelf} />
      </ShelfChanger>
      <span className="title">{title}</span>
      <span className="author">
        {authors
          ? authors.map((author) => {
              return (
                <p key={author} className="ind-auth">
                  {author}
                </p>
              );
            })
          : 'No Author Listed'}
      </span>
    </BookItem>
  );
};

export default Book;
