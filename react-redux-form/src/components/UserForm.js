import React from 'react';
import {connect} from 'react-redux';
import {Field, Form, Errors, actions} from 'react-redux-form';
import validator from 'validator';
import SubmitButton from './submit-button';
import PropTypes from 'prop-types';
// dispatch.(actions.validate('user', {
//   required: (value) => value && value.length
//   valid: validator.required
// }))

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(user) {
    const {dispatch} = this.props;

    // Do whatever you like in here.
    // You can use actions such as:
    // dispatch(actions.submit('user', somePromise))
    const somePromise = new Promise((resolve) => {
      /* eslint-disable no-console */
      console.log(user);
      /* eslint-enable no-console */
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
    dispatch(actions.submit('user', somePromise));
  }
  render() {
    // const {existing} = this.props
    return (<Form model="user" onSubmit={this.handleSubmit}>
      <div>
        <Field model="user.firstName" validators={{
            isRequired: (val) => !validator.isEmpty(val)
          }}>
          <label>First name:</label>
          <input type="text"/>
          <Errors wrapper="span" show={{
              touched: true,
              focus: false
            }} model="user.firstName" messages={{
              isRequired: 'Please provide a first name.'
            }}/>
        </Field>
      </div>
      <div>
        <Field model="user.lastName" validators={{
            isRequired: (val) => !validator.isEmpty(val)
          }}>
          <label>Last Name:</label>
          <input type="text"/>
          <Errors wrapper="span" show={{
              touched: true,
              focus: false
            }} model="user.lastName" messages={{
              isRequired: 'Please provide a last name.'
            }}/>
        </Field>
      </div>
      <div>
        <Field model="user.email" validators={{
            isRequired: (val) => !validator.isEmpty(val),
            isEmail: (val) => validator.isEmail(val),
          }}>
          <label>Email:</label>
          <input type="text"/>
          <Errors wrapper="span" show={{
              touched: true,
              focus: false
            }} model="user.email" messages={{
              isRequired: 'Please provide a last name.',
              isEmail: 'Enter valid email id'
            }}/>
        </Field>
      </div>
      <SubmitButton/>
    </Form>)
  }
}

UserForm.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(UserForm);
