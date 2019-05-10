import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import ContactForm from './containers/contact-form'
import {reducer as reduxFormReducer } from 'redux-form';

const reducer = combineReducers({
  form: reduxFormReducer // mounted under form
})
const store = createStore(reducer);

const submitContactForm = values => {
  console.log(values)
}
ReactDOM.render(
<Provider store={store}>
  <ContactForm onSubmit={submitContactForm} />
</Provider>,
  document.getElementById('root')
)
