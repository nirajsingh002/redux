/**
 * Form validation functions
 */

 /**
  * The function is responsible for check required field
  * @{param} string/number: field value
  * @{return} undefined||string: if field is not empty then return undefined else return error message
  */

const required = value => (value || typeof value === 'number') ? undefined : 'Required';

/**
 * The function is for email verification
 * @{param} string: field value
 * @{return} undefined/string: return undefined for valid email and string error message for
 *                             invalid email address
 */

 const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

/**
 * export module
 */

module.exports = {
  required: required,
  email: email
}
