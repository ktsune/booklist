import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';


export default class AddBookForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      summary: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.handleSubmit(this.state);
  }

  render() {
    return (
      <div>
       <form role='button' className='add-book-btn' onSubmit={this.handleSubmit}>
       <label className='label'>
         Book Title:
         <input
           name="bookTitle"
           type="text"
           onChange={event => { this.setState({ title: event.target.value }) }} />
       </label>
       <br />
       <label className='label'>
         Summary:
         <input
           name="summary"
           type="text"
           onChange={event => { this.setState({ summary: event.target.value }) }} />
       </label>
       <input className="save-button" type="submit" value="Add"/>
      </form>
      </div>
    )
  }
}
