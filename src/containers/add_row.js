import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

export default class AddRow extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      bookTitle: "",
      summary: "",
    }
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div>
       <form role='button' className='add-book-btn' onSubmit={this.onSubmit}>
       <label>
         Book Title:
         <input
           name="bookTitle"
           type="text"
           onChange={event => { this.setState({ bookTitle: event.target.value }) }} />
       </label>
       <br />
       <label>
         Summary:
         <input
           name="summary"
           type="text"
           onChange={event => { this.setState({ summary: event.target.value }) }} />
       </label>
       <input type="submit" value="Add"/>
      </form>
      </div>
    )
  }
}
