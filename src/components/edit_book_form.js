import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

export default class EditBook extends Component{
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = this.props.book;
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.handleSubmit(this.state);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.handleCancel}>Cancel</button>
       <form role='button' className='add-book-btn' onSubmit={this.handleSubmit}>
       <label className="label">
         Book Title:
         <input
           name="bookTitle"
           type="text"
           text="Title goes here!"
           onChange={event => { this.setState({ title: event.target.value }) }}
           defaultValue={this.props.book.title} />
       </label>
       <br />
       <label className="label">
         Image:
         <input
           name="image"
           type="text"
           text="Summary goes here!"
           onChange={event => { this.setState({ image: event.target.value }) }}
           defaultValue={this.props.book.image} />
       </label>
       <br />
       <label className="label">
         Summary:
         <input
           name="summary"
           type="text"
           text="Summary goes here!"
           onChange={event => { this.setState({ summary: event.target.value }) }}
           defaultValue={this.props.book.summary} />
       </label>
       <input  type="submit" value="Save!" className="save-button"/>
      </form>
      </div>
    )
  }
}
