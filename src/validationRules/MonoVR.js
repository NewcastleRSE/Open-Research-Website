import validateDOI from "../fieldValidation/DOI";
import validateLicense from "../fieldValidation/License";
import validateURL from "../fieldValidation/URL";

export default function validate(values) {
  let errors = {};
  console.log(values);
  errors = validateURL(errors, values.monographURL);

  errors = validateDOI(errors, values.monographDOI);

  errors = validateLicense(errors, values.monographLicense);

  // Embargo
  if (!values.monographEmbargo) {
    errors.embargo = "Required";
  }

  return errors;
}
