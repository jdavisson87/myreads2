import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SelectorCtr } from './Selector.styles';
import * as actions from '../../store/actions/books.actions';

const Selector = ({ book, updateShelf }) => {
  const [shelf, setShelf] = useState(book.shelf);
  const handleChange = (newShelf) => {
    setShelf(newShelf);
    updateShelf(book, newShelf);
  };
  return (
    <SelectorCtr
      value={shelf}
      onChange={(event) => handleChange(event.target.value)}
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
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateShelf: (book, newShelf) =>
      dispatch(actions.updateShelves(book, newShelf)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Selector);
