import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import todos from './todos';
import loading from './loading';

const todoApp = combineReducers({
    loading,
    visibilityFilter,
    todos
})

export default todoApp;