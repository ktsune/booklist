import React, { Component } from 'react';
import BookDetail from './bookdetail';
import PropTypes from 'prop-types';
import AddRow from './addrow';

export default class BookList extends Component {
  static propTypes = {
    handleSelected: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      books: this.props.books,
      selectedBook: null,
      showForm: false,
      bookTitle: "",
      summary: ""
    }
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

      if (deletedBook.title != currentBook.title) {
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

  toggleShowForm = () => {
    this.setState({showForm:!this.state.showForm})
  }

  renderAddFormComponent = () => {
    if (!this.state.showForm) { return; }
    return <AddRow onSubmit={this.props.onNewBook} />;
  }

  render() {
    return (
      <div className='border book-list-container'>
          <div className='book-list'>
            <button onClick={this.toggleShowForm}>Add Book</button>
            {this.renderAddFormComponent()}
            <ul style={{color: this.props.listItemColor}}>
              {this.props.books.map(function(book, i){
                return (
                  <div key={i}>
                    <DeleteRow onClick={(e) => { this.deleteHandler(book, e) }} ></DeleteRow>
                    <BookListRow book={book} onClick={(e) => { this.handleClick(book, e) }}>  </BookListRow>
                  </div>
                )
               }.bind(this))}
            </ul>
          </div>
        </div>
      );
    }
  }


class BookListRow extends Component {
  render() {
    return (
      <div role='button' onClick={this.props.handleClick} className='list-group-item'>
        {this.props.book.title}
      </div>
    )
  }
}

class DeleteRow extends Component {
  render() {
    return (
      <div role='button' onClick={this.props.handleClick} className='delete-btn'>
        x
      </div>
    )
  }
}
