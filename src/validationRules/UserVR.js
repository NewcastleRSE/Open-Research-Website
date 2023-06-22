import validateEmail from "../fieldValidation/Email";

// handles validating registration, the rules and error generation is made in the above imports. the errors and item that needs validating is sent and then errors are returned. these errors are passed in as props to various form elements and forms then when they're submitted, it will display the errors if there are any.
export default function validateUser(email) {
  console.log(email);
  let errors = {};
  errors = validateEmail(errors, email);

  return errors;
}
