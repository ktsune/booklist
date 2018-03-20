import React, { Component } from 'react';

export default class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return (
      <div className="book-detail list-title">
        Select a book to get started.
      </div>
      )
    }

    return (
      <div className="book-detail">
        <h3>
          <div>Details for:  {this.props.book.title}</div>
          <img className='img' src={this.props.book.img} style={{width: 200}}/>
          <div>{this.props.book.plot}</div>
        </h3>
      </div>
    );
  }
}
