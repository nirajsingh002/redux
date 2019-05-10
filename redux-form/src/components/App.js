import React, { Component } from "react";
import LoginForm from "./containers/LoginForm";

export default class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Application Start</h1>
        <LoginForm onSubmit={this.props.onSubmit} />
      </div>
    );
  }
}
