import React, { Component } from 'react';
// import BookDetail from './bookdetail';
import PropTypes from 'prop-types';
import AddRow from './addrow';
import DeleteRow from './deleterow';


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

  renderAddFormComponent = () => {
    if (!this.state.showForm) { return; }
    return <AddRow onSubmit={this.props.onNewBook} />;
  }

  toggleShowForm = () => {
    this.setState({showForm:!this.state.showForm});
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
                    <DeleteRow handleClick={(e) => { this.props.handleDelete(book, e) }}></DeleteRow>
                    <BookListRow book={book} handleClick={(e) => { this.handleSelect(book, e) }}>  </BookListRow>
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
