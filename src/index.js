import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css'
import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
    , document.getElementById('root'));

  // , document.querySelector('.wrapper'));

// ReactDOM.render(<App />, document.getElementById('app'));

// ReactDOM.render(
//   <Provider store={store}>
//     <App store={store}/>
//   </Provider>, /* code change */
//   document.getElementById('root')
// );

// var IncorrectListRender = React.createClass({
//    render: function() {
//      return (
//        <ul>
//          <li>{this.props.list}</li>
//        </ul>
//      )
//    }
//  });
//  React.render(<IncorrectListRender list={[1,2,3,4,5]} />, document.getElementById('incorrect-list-render'))
