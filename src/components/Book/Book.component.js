import React from 'react';
import Selector from '../Selector/Selector.component';

const Book = ({ book, updateShelf }) => {
  const { title, authors, imageLinks } = book;
  return (
    <li className="book">
      <div
        className="book-cover"
        style={{
          backgroundImage: `url(${
            imageLinks
              ? imageLinks.thumbnail
              : 'https://dummyimage.com/128X170/000/dadbe3.jpg&text=NO+IMAGE'
          })`,
        }}
      />
      <div className="shelf-changer">
        <Selector book={book} updateShelf={updateShelf} />
      </div>
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
    </li>
  );
};

export default Book;
