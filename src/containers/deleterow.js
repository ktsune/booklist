import React, { Component } from 'react';




export default class DeleteRow extends Component {
  render() {
    return (
      <div role='button' onClick={this.props.handleClick} className='delete-btn'>
        x
      </div>
    )
  }
}
