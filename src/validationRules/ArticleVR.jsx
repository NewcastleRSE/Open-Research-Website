import validateTitle from "../fieldValidation/Title";
import validateURL from "../fieldValidation/URL";
import validateDOI from "../fieldValidation/DOI";
import validateLicense from "../fieldValidation/License";

export default function validate(values) {
  let errors = {};

  errors = validateTitle(errors, values.title);

  errors = validateURL(errors, values.url);

  errors = validateDOI(errors, values.doi);

  errors = validateLicense(errors, values.license);

  // Embargo
  if (!values.embargo) {
    errors.embargo = "Required";
  }

  return errors;
}
