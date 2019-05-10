import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
// create a user form
import UserForm from './components/UserForm.js';
// console.log('store', store);
class App extends React.Component {
  render() {
    return (
    <Provider store={ store }>
      <UserForm />
    </Provider>
  )
  }
}
ReactDOM.render(
  <App />
  , document.getElementById("root"));
