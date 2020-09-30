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

const Book = (props) => {
  const { book } = props; //still needs book passed down
  const { title, authors, imageLinks } = book;
  const imgStyle = imageLinks
    ? imageLinks.thumbnail
    : 'https://dummyimage.com/128X170/000/dadbe3.jpg&text=NO+IMAGE';
  return (
    <BookItem>
      <BookCover imgUrl={imgStyle} />
      <ShelfChanger>
        <Selector book={book} />
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
