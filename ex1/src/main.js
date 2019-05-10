import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  , document.getElementById('app')
)
