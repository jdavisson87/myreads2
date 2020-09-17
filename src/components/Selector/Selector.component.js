import React from 'react';
import { update } from '../../utils/BooksAPI';
import { SelectorCtr } from './Selector.styles';

const Selector = ({ book, updateShelf }) => (
  <SelectorCtr
    value={book.shelf}
    onChange={(event) =>
      update(book, event.target.value).then(
        updateShelf(book, event.target.value)
      )
    }
  >
    <option value="title" disabled>
      Move to...
    </option>
    <option value="currentlyReading">Currently Reading</option>
    <option value="wantToRead">Want to Read</option>
    <option value="read">Finished Reading</option>
    <option value="none">None</option>
  </SelectorCtr>
);

export default Selector;
