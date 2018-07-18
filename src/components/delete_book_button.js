import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

export default class DeleteBookButton extends Component {
  static propTypes = {
    handleClick: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div role='button' onClick={this.props.handleClick} className='delete-btn'>
        x
      </div>
    )
  }
}
