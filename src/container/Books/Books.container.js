import React from 'react';
import Selector from '../../components/Selector/Selector.component';

const Book = ({ books, updateShelf }) => {
  if (books) {
    if (books.length > 0) {
      return (
        <ol className="books">
          {books.map((book) => {
            return (
              <li key={book.id}>
                <div className="book">
                  <div
                    className="book-cover"
                    style={{
                      backgroundImage: `url(${
                        book.imageLinks
                          ? book.imageLinks.thumbnail
                          : 'https://dummyimage.com/128X170/000/dadbe3.jpg&text=NO+IMAGE'
                      })`,
                    }}
                  />
                  <div className="shelf-changer">
                    <Selector book={book} updateShelf={updateShelf} />
                  </div>
                  <span className="title">{book.title}</span>
                  <span className="author">
                    {book.authors
                      ? book.authors.map((author) => {
                          return (
                            <p key={author} className="ind-auth">
                              {author}
                            </p>
                          );
                        })
                      : 'No Author Listed'}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      );
    } else {
      return (
        <div>
          <p>
            Currently, there are no results. Please enter new search criteria.
          </p>
        </div>
      );
    }
  } else {
    return <div>Please search for a book</div>;
  }
};

export default Book;
