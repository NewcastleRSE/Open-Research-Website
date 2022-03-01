import validateURL from "../fieldValidation/URL";

export default function validate(values) {
  let errors = {};

  errors = validateURL(errors, values.protocolURL);

  if (!values.protocolSharing) {
    errors.protocolSharing = "Required";
  }

  return errors;
}
