import {createStore, combineReducers, applyMiddleware} from 'redux';
import { combineForms, createForms } from 'react-redux-form';
import thunk from 'redux-thunk';

const initialUserState = {
  firstName: '',
  lastName: '',
  email: ''
};

const store = applyMiddleware(thunk)(createStore)(combineReducers({
  ...createForms({
    user: initialUserState
  }),
}))

export default store;
