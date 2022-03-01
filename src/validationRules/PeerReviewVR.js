import validateURL from "../fieldValidation/URL";

export default function validate(values) {
  let errors = {};

  errors = validateURL(errors, values.peerRevURL);

  if (!values.peerRevResponse) {
    errors.peerRevResponse = "Required";
  }

  return errors;
}
