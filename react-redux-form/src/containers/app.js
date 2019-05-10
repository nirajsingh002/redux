import React from 'react';
import {connect } from 'react-redux';
import { Control, Form } from 'react-redux-form';
import style from  '../app.css';


export default class App extends React.Component {
  handleSubmit(val) {
    // get form values
    console.log(val);
  }
  render() {
    return (
      <Form model="user" onSubmit={(val) => this.handleSubmit(val)}>
        <label>Your name?</label>
        <Control.text model=".name" />
        <button>Submit!</button>
      </Form>
    )
  }
}
