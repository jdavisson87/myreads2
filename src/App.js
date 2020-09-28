import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/books.actions';
import BookShelves from './container/BookShelves/BookShelves.container';
import Search from './components/Search/Search.component';
import Footer from './components/Footer/Footer.component';
import PersonalIcon from './components/PersonalIcon/PersonalIcon.component';
import {
  AppHeader,
  AppTitle,
  AppCtr,
  LoadingCtr,
  LoadingText,
  MainCtr,
  BodyCtr,
} from './App.styles';

const App = (props) => {
  // const [books, setBooks] = useState([]);
  // const [current, setCurrent] = useState([]);
  // const [want, setWant] = useState([]);
  // const [read, setRead] = useState([]);
  //const [showingBooks, setShowingBooks] = useState([]);

  const { onFetchBooks, isLoading } = props;

  useEffect(
    () => {
      // BooksAPI.getAll().then((books) => {
      //   setBooks(books);
      //   setIsLoading(false);
      //   filterBooks(books);
      // });

      onFetchBooks();
    },
    [onFetchBooks]
  );

  // const filterBooks = (books) => {
  //   const current = books.filter((book) => book.shelf === 'currentlyReading');
  //   const want = books.filter((book) => book.shelf === 'wantToRead');
  //   const read = books.filter((book) => book.shelf === 'read');
  //   setCurrent(current);
  //   setWant(want);
  //   setRead(read);
  // };

  // const correctShelf = (book) => {
  //   const bookOnShelf = books.filter((b) => b.id === book.id)[0];
  //   book.shelf = bookOnShelf ? bookOnShelf.shelf : 'none';
  //   return book;
  // };

  // const removeFromShelf = (book) => {
  //   switch (book.shelf) {
  //     case 'wantToRead':
  //       let updatedWant = want.filter((b) => b.id !== book.id);
  //       setWant(updatedWant);
  //       break;
  //     case 'read':
  //       let updatedRead = read.filter((b) => b.id !== book.id);
  //       setRead(updatedRead);
  //       break;
  //     default:
  //       let updatedCurrent = current.filter((b) => b.id !== book.id);
  //       setCurrent(updatedCurrent);
  //       break;
  //   }
  // };

  // const updateShelf = (book, newShelf) => {
  //   if (book.shelf !== 'none') {
  //     removeFromShelf(book);
  //   }
  //   if (book.shelf === 'none') {
  //     let updateBooks = books.concat([book]);
  //     //setBooks(updateBooks);
  //   }
  //   switch (newShelf) {
  //     case 'wantToRead':
  //       book.shelf = newShelf;
  //       let updateWant = want.concat([book]);
  //       setWant(updateWant);
  //       break;
  //     case 'currentlyReading':
  //       book.shelf = newShelf;
  //       let updateCurrent = current.concat([book]);
  //       setCurrent(updateCurrent);
  //       break;
  //     case 'read':
  //       book.shelf = newShelf;
  //       let updateRead = read.concat([book]);
  //       setRead(updateRead);
  //       break;
  //     default:
  //       book.shelf = newShelf;
  //       let updateBooks = books.filter((b) => b.id !== book.id);
  //     //setBooks(updateBooks);
  //   }
  // };

  // const updateSearch = (query) => {
  //   if (query) {
  //     BooksAPI.search(query).then((results) => {
  //       if (results.length > 0) {
  //         results = results.map((book) => correctShelf(book));
  //         setShowingBooks(results);
  //       } else {
  //         setShowingBooks([]);
  //       }
  //     });
  //   } else {
  //     setShowingBooks([]);
  //   }
  // };

  // const searchReset = () => {
  //   setShowingBooks([]);
  // };

  return isLoading ? (
    <AppCtr>
      <LoadingCtr>
        <LoadingText>Loading...</LoadingText>
      </LoadingCtr>
    </AppCtr>
  ) : (
    <AppCtr>
      <MainCtr>
        <AppHeader>
          <AppTitle>My Reads 2.0</AppTitle>
          <PersonalIcon />
        </AppHeader>
        <BodyCtr>
          <Route
            exact
            path="/"
            render={
              () => <BookShelves updateShelf={() => {}} />
              // updateShelf
            }
          />
          <Route exact path="/search" />

          {/*
                <Search
                  books={showingBooks}
                  updateSearch={updateSearch}
                  searchReset={searchReset}
                  updateShelf={updateShelf}
                />
              */}

          <Footer />
        </BodyCtr>
      </MainCtr>
    </AppCtr>
  );
};

const mapStateToProps = ({ books }) => {
  return {
    isLoading: books.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchBooks: () => dispatch(actions.fetchBooks()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
