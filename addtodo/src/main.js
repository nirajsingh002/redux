import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import App from './components/App';
import dataService from './services/data-service';
import logger from './middlewares/logger';
import crashReporter from './middlewares/crash-reporter';

import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './actions'


const store = createStore(rootReducer,
    {},
    compose(
        applyMiddleware(dataService, logger, crashReporter),
        window.devToolsExtension ? window.devToolsExtension() : f => f)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));

// store.dispatch(addTodo('Use Redux'))
store.dispatch({ type: 'GET_TODO_DATA' })

//Testing
// console.log(store.getState());

// const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
// store.dispatch(addTodo('Learn about actions'));

// unsubscribe();