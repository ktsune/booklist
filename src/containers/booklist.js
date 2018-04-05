import React, { Component } from 'react'
import PropTypes from 'prop-types';
import AddBookForm from '../components/add_book_form';
import DeleteBook from '../components/deletebookbutton';
import CancelBookButton from '../components/cancelbookbutton';

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
    }
  }

  handleSelect(book) {
    this.setState({selectedBook: book})
    this.props.handleSelected(book);
  };

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  toggleShowForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  renderAddFormComponent = () => {
     if (this.state.showForm) {
      return <AddBookForm onSubmit={this.props.onNewBook}  />;
     }
  }

  renderButton = () => {
    const text = this.state.showForm ? "Cancel" : "Add Book";

    return (
      <button onClick={this.toggleShowForm}>{text}</button>
    )
  }

  render() {
    return (
      <div className='border book-list-container'>
          <div className='book-list'>
            {this.renderButton()}
            {this.renderAddFormComponent()}
            <ul style={{color: this.props.listItemColor}}>
              {this.props.books.map(function(book, i){
                return (
                  <div key={i}>
                    <DeleteBook handleClick={(e) => { this.props.handleDelete(book, e) }}></DeleteBook>
                    <BookListRow book={book} handleClick={(e) => { this.handleSelect(book, e) }}>  </BookListRow>
                    {/* <CancelBookButton /> */}
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
