import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditBook from '../components/edit_book_form';
import { bindActionCreators } from 'redux';

export default class BookDetail extends Component {
  static propTypes = {
    handleClick: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired
  }

  renderEditButton = () => {
    return  <button onClick={this.props.handleClick}>Edit</button>
  }

  render() {
    if (!this.props.book) {
      return (
      <div className="book-selection">
        Select a book to get started.
      </div>
      )
  }

    return (
      <div>
        {this.renderEditButton()}

        <h3>
          <div>{this.props.book.title}</div>
          <img className='img' src={this.props.book.image} style={{width: 200}}/>
          <div>
            {this.props.book.summary}
          </div>
        </h3>
      </div>
    );
  }
}
