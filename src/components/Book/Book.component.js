import React from 'react';
import Selector from '../Selector/Selector.component';
import {
  BookItem,
  BookCover,
  ShelfChanger,
  BookTitle,
  BookAuthor,
  BookIndvAuthor,
} from './Book.styles';

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
      <BookTitle>{title}</BookTitle>
      <BookAuthor>
        {authors
          ? authors.map((author) => {
              return <BookIndvAuthor key={author}>{author}</BookIndvAuthor>;
            })
          : 'No Author Listed'}
      </BookAuthor>
    </BookItem>
  );
};

export default Book;
