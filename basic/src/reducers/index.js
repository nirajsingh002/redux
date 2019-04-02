export default (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return (
                console.log('increment', state),
                state + 1
            )
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

