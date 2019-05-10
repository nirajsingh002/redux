import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {counterReset, counterIncrement} from '../actions';
class App extends Component {
  render() {
    return (
      <div>
        Counter is {this.props.counter}
        <button onClick= { () => this.props.counterReset(0) } >Reset</button>
        <button onClick={ () => this.props.counterIncrement() }>Add</button>
      </div>
    )
  }
}
function mapStateToProp(state) {
console.log(state);
  return {
    counter: state.default.counter
  }
}
// const mapStateToProp = state => ({
//   counter: state
// })

function matchDispatchToProps(dispatch) {
	return bindActionCreators({counterReset: counterReset, counterIncrement: counterIncrement}, dispatch);
}
export default connect(mapStateToProp, matchDispatchToProps)(App);
