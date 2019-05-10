import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import validator from "../../js/validation";
import submit from "../../js/submit";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label htmlFor="">{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

class LoginForm extends Component {
  render() {
    console.log("loginform", this.props);
    const { error, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <Field
            name="username"
            component={renderField}
            type="text"
            label="User Name"
            validate={[validator.required]}
          />
        </div>
        <div>
          <Field
            name="password"
            component={renderField}
            type="text"
            label="Password"
            validate={[validator.required]}
          />
        </div>
        <div>
          <Field
            name="email"
            component={renderField}
            type="email"
            label="email"
            validate={[validator.required, validator.email]}
          />
        </div>
        {error && <strong>{error}</strong>}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "login" // a unique identifier for this form
})(LoginForm);
