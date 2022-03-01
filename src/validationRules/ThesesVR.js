import validateURL from "../fieldValidation/URL";
import validateDOI from "../fieldValidation/DOI";
import validateLicense from "../fieldValidation/License";

export default function validate(values) {
  let errors = {};

  errors = validateURL(errors, values.thesisURL);

  errors = validateDOI(errors, values.thesisDOI);

  errors = validateLicense(errors, values.thesisLicense);

  if (!values.thesisEmbargo) {
    errors.embargo = "Required";
  }

  return errors;
}
