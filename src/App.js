import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookList from './containers/book_list';
import BookDetail from './containers/book_detail';
import defaultBooks from './books';
import BookContainer from './containers/book_container';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBooks } from './actions/get_book';
import { createBook } from './actions/create_book';

 class App extends Component {
  static propTypes = {
  handleSelected: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    const books = defaultBooks.map((book) => {
      return {
        image: book.img,
        title: book.title,
        summary: book.plot
      }
    })

    this.state = {
      books: books
    }
  }

  headerStyle() {
    let color;
    if (this.props.bright === true) {
      color = 'pink';
    } else {
      color = 'white';
    }
    return {color:color}
  }

  handleClick = (book) => {
    this.setState({selectedBook: book})
    this.props.handleSelected(book);
  };

  handleDelete = (deletedBook, e) => {
    e.preventDefault();
    var updatedBooks = []
    for (var i = 0; i < this.state.books.length; i++) {
      var currentBook = this.state.books[i];

      if (deletedBook.title !== currentBook.title) {
        updatedBooks.push(currentBook)
      }
    }
    this.setState({books: updatedBooks})

    // can user the filter function as an alternative to for loop:
    // var books = this.state.books.filter(function(book) {
    //   return book.title != deletedBook.title;
    // });
  }

  handleEdit = (updatedBook) => {
    var updatedBookList = []

    for (var i = 0; i < this.state.books.length; i++) {
      var currentBook = this.state.books[i];

      if (currentBook.title === this.state.selectedBook.title) {
        updatedBookList.push(updatedBook)
      } else {
        updatedBookList.push(currentBook)
      }
    }

    this.setState({
      books: updatedBookList,
      selectedBook: updatedBook
    })
  }

  handleNewBook = (newBook) => {
    this.props.createBook(newBook);
    // this.setState({ books: this.state.books.concat(newBook) })
  }

  setSelectedBook = (book) => {
   this.setState({selectedBook: book})
  }

  render() {
    return (
      <div>
        <h1 className='list-title' style={this.headerStyle()} align='center'>Book List</h1>
        <div>
          <BookList
            listItemColor="white"
            handleSelected={this.setSelectedBook}
            books={this.state.books}
            onNewBook={this.handleNewBook}
            handleDelete={this.handleDelete}  />
          <BookContainer
            book={this.state.selectedBook}
            updatedBook={this.handleEdit} />
        </div>
      </div>
    );
  }
}
{/* <Provider store={store}><ConnectedPortfolio /></Provider> */}
{(book) => { this.setSelectedBook(book) }}

function mapStateToProps({ books }) {
  return { books, createBook };  // { weather} === {weather: weather}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchBooks, createBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
