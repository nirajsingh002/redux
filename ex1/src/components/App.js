import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleText } from '../actions';
class App extends Component {
  render() {
    return (
      <div className="container">
        <button onClick= { () => this.props.toggleText(this.props.buttonStates)} >
        {this.props.buttonStates.state ? 'ON' : 'OFF' } 
        </button>
      </div>
    )
  }
}
/* map state to prop of component */
function mapStateToProps(state) {
  return {
    buttonStates: state.default
  }
}
/* dispatch handler to props */
function matchDispatchToProps(dispatch) {
  return bindActionCreators({toggleText}, dispatch);
}
/* connect componet with state and handlers */

export default connect(mapStateToProps, matchDispatchToProps)(App);
