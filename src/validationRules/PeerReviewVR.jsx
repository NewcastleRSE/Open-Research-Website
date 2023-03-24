import validateTitle from "../fieldValidation/Title";
import validateURL from "../fieldValidation/URL";

export default function validate(values) {
  let errors = {};

  errors = validateTitle(errors, values.peerRevTitle);

  errors = validateURL(errors, values.peerRevURL);

  if (!values.peerRevResponse) {
    errors.peerRevResponse = "Required";
  }

  return errors;
}
