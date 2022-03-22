import validateTitle from "../fieldValidation/Title";
import validateURL from "../fieldValidation/URL";

export default function validate(values) {
  let errors = {};

  errors = validateTitle(errors, values.protocolTitle);

  errors = validateURL(errors, values.protocolURL);

  if (!values.protocolSharing) {
    errors.protocolSharing = "Required";
  }

  return errors;
}
