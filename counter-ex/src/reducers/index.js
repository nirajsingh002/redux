
const initial = {
  counter: 0
}
const CouterFn = (state = initial, action) => {
  switch(action.type) {
    case 'counter:increment':
      return Object.assign({}, state, {counter: state.counter + 1})
    case 'counter:set':
      const { value } = action
      return Object.assign({}, state, {counter: value})
  }
  return state;
}
export default CouterFn;
