/*
  Desc: Action fro toggle button text
*/

export const toggleText = (buttonStates) => {
  return {
    type: 'TOGGLE_TEXT',
    buttonStates: buttonStates
  }
}
