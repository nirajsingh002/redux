
export const counterIncrement = (counter) => {
  return {
    type: 'counter:increment',
    counter
  }
}

export const counterReset = (value) => {
  return {
    type: 'counter:set',
    value
  }
}
