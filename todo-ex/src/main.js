import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App.jsx';
import todos from './reducers/todos';
import * as lib from './actions';

const store = createStore(todos, ['Use Redux']);
console.log(store.getState());
console.log( store.dispatch(lib.addTodo('Read the docs')) )
console.log( store.dispatch(lib.addTodo('Read about the middleware')) )
ReactDOM.render(<App />, document.getElementById('app'));
