import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import './App.css'


ReactDOM.render(<App />, document.getElementById('app'));

// var IncorrectListRender = React.createClass({
//    render: function() {
//      return (
//        <ul>
//          <li>{this.props.list}</li>
//        </ul>
//      )
//    }
//  });
//  React.render(<IncorrectListRender list={[1,2,3,4,5]} />, document.getElementById('incorrect-list-render'));
