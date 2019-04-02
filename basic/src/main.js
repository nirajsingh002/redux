import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter';
import counter from './reducers';
import { addTodo } from '../../addtodo/src/actions';

const store = createStore(counter);

const render = () => ReactDOM.render(<Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}

/>, document.getElementById('root'));

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => store.getState())
console.log('unsubscribe', unsubscribe());
// Dispatch some actions
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
render();
store.subscribe(render)

// stop listening to state updates
unsubscribe()
store.dispatch({ type: 'INCREMENT' })