import React from 'react';
import {Field, reduxForm} from 'redux-form';
import RenderMembers from './dynamic-add-field'
import validator from '../js/validation';
import submit from '../js/submit';

const renderField = ({input, label, type, meta: { touched, error }}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

class ContactForm  extends React.Component {
  render() {
    const {error, handleSubmit } = this.props
    return (
      <form onSubmit={ handleSubmit(submit)}>
        <div>
          <Field name="username" component={renderField} type="text" label="User Name"
            validate={[validator.required]}
            />
        </div>
        <div>
          <Field name="password" component={renderField} type="text" label="Password"/>
        </div>
        <div>
          <Field name="email" component={renderField} type="email" label="email"
            validate={[validator.required, validator.email]}
            />
        </div>
        {error && <strong>{error}</strong>}
        <button type="submit">Sumbit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'contact', // a unique identifier for this form
})(ContactForm);
