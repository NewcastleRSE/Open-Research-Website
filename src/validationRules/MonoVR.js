import validateDOI from "../fieldValidation/DOI";
import validateLicence from "../fieldValidation/Licence";
import validateURL from "../fieldValidation/URL";

export default function validate(values) {
  let errors = {};

  errors = validateURL(errors, values.monographURL);

  errors = validateDOI(errors, values.monographDOI);

  errors = validateLicence(errors, values.monographLicence);

  // Embargo
  if (!values.monographEmbargo) {
    errors.embargo = "Required";
  }

  return errors;
}
