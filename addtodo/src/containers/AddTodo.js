import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
    let input = React.createRef();
    // Bound action creator that automatically dispatch
    // const boundAddTodo = text => dispatch(addTodo(text));
    // boundAddTodo('Testing')

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}>
                <input
                    ref={node => {
                        input = node
                    }} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default connect()(AddTodo);