import React, { Component } from 'react'
import PropTypes from 'prop-types';
import AddBookForm from '../components/add_book_form';
import DeleteBook from '../components/delete_book_button';
import { bindActionCreators } from 'redux';

export default class BookList extends Component {
  static propTypes = {
    handleSelected: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    showForm: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
    listItemColor: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
    onNewBook: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      books: this.props.books,
      selectedBook: null,
      showForm: false
    }
  }

  handleSelect(book) {
    this.setState({selectedBook: book})
    this.props.handleSelected(book);
  };

  toggleShowForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  renderAddBookForm = () => {
     if (this.state.showForm) {
      return <AddBookForm handleSubmit={this.props.onNewBook}  />;
     }
  }

  renderButton = () => {
    const text = this.state.showForm ? "Cancel" : "Add Book";

    return (
      <button onClick={this.toggleShowForm}>{text}</button>
    )
  }

  render() {
    const books = this.props.books.map((book, i) => {
      return (
        <div key={i}>
          <DeleteBook handleClick={(e) => { this.props.handleDelete(book, e) }}></DeleteBook>
          <BookListRow book={book} handleClick={(e) => { this.handleSelect(book, e) }}></BookListRow>
        </div>
      )
    });

    return (
      <div className='border book-list-container'>
          <div className='book-list'>
            {this.renderButton()}
            {this.renderAddBookForm()}
            <ul style={{color: this.props.listItemColor}}>
              {books}
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
