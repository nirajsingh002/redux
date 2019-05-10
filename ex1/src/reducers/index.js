/*
  Desc: Reducers for toggle text
*/

const initialState = {
  state: true
};

export default function Actions(state = initialState, action) {
  switch(action.type) {
    case "TOGGLE_TEXT":
      return Object.assign({}, state, {state: !action.buttonStates.state});
    default:
      return state;
  }
}
