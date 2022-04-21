import validateTitle from "../fieldValidation/Title";
import validateURL from "../fieldValidation/URL";
import validateLicense from "../fieldValidation/License";

export default function validate(values) {
  let errors = {};

  errors = validateTitle(errors, values.dsTitle);

  errors = validateURL(errors, values.dsURL);

  errors = validateLicense(errors, values.dsLicense);

  if (!values.dsEmbargo) {
    errors.embargo = "Required";
  }

  return errors;
}
