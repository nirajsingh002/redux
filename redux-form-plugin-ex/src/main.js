import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

// import App from './components/App.jsx';
import SimpleForm from './containers/simpleform.js';

const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
});

const store = createStore(reducer);

const showResults = values =>
new Promise(resolve => {
  setTimeout(() => {
    // simulate server latency
    window.alert(`You submitted: \n\n${JSON.stringify(values, null, 2)}`)
    resolve()
  }, 500)
})
ReactDOM.render(
  <Provider store={store}>
    <SimpleForm onSubmit={showResults} />
  </Provider>
  , document.getElementById('root'));
