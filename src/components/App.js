import React, { Component } from 'react';
import BookList from '../containers/booklist';
import BookDetail from '../containers/bookdetail';
import defaultBooks from './data';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: defaultBooks
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
          />
          <BookDetail book={this.state.selectedBook}/>
        </div>
      </div>
    );
  }
}
