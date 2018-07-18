import React, { Component } from 'react';
import BookDetail from '../containers/book_detail';
import EditBook from '../components/edit_book_form';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';


export default class BookContainer extends Component{
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,
    handleCancel: PropTypes.func.isRequired,
    handleShowForm: PropTypes.func.isRequired,
    updatedBook: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      showEditForm: false
    }
  }

  handleShowForm = () => {
    this.setState({ showEditForm: true });
  }

  handleSubmit = (updates) => {
    this.setState({ showEditForm: false });
    this.props.updatedBook(updates);
  }

  handleCancel = () => {
    this.setState({ showEditForm: false })
  }

  renderBook() {
    return this.state.showEditForm ?
      <EditBook book={this.props.book} handleSubmit={this.handleSubmit} handleCancel={this.handleCancel}/> :
      <BookDetail book={this.props.book} handleClick={this.handleShowForm}/>;
  }

  render() {
    return (
      <div className="book-detail">
        {this.renderBook()}
      </div>
    )
  }
}
