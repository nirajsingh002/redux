import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './components/App.jsx';
import * as rootReducer from './reducers';

const reducer = combineReducers(rootReducer);
const store = createStore(reducer)
console.log('store', store);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
  , document.getElementById('app'));
