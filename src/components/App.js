import React, { Component } from 'react';
import BookList from '../containers/booklist';
import BookDetail from '../containers/bookdetail';
import defaultBooks from './data';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: defaultBooks,
      // books: this.props.books

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

  handleClick(book) {
    this.setState({selectedBook: book})
    this.props.handleSelected(book);
  };

  deleteHandler(deletedBook, e) {
    e.preventDefault();
    var updatedBooks = []
    for (var i = 0; i < this.state.books.length; i++) {
      var currentBook = this.state.books[i];

      if (deletedBook.title !== currentBook.title) {
        updatedBooks.push(currentBook)
      }
      console.log(deletedBook.title, currentBook.title)
    }
    this.setState({books: updatedBooks})
    console.log(updatedBooks)
    // can user the filter function as an alternative to for loop:
    // var books = this.state.books.filter(function(book) {
    //   return book.title != deletedBook.title;
    // });
  }

  handleNewBook = (rawBook) => {
    // rawBook has "bookTitle", "summary"
    // this.state.books uses "title", "plot"
    const newBook = {
      title: rawBook.bookTitle,
      plot: rawBook.summary
    }
    this.setState({ books: this.state.books.concat(newBook) })
  }

  setSelectedBook(book) {
   this.setState({selectedBook: book})
  }

  render() {

    return (
      <div>
        <h1 className='list-title' style={this.headerStyle()} align='center'>Book List</h1>
        <div>
          <BookList
            listItemColor="white"
            handleSelected={(book) => { this.setSelectedBook(book) }}
            books={this.state.books}
            onNewBook={this.handleNewBook}
            handleDelete={(book, e) => { this.deleteHandler(book, e) }}
          />
          <BookDetail book={this.state.selectedBook}/>
        </div>
      </div>
    );
  }
}
