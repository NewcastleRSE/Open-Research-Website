import validateURL from "../fieldValidation/URL";
import validateDOI from "../fieldValidation/DOI";
import validateLicence from "../fieldValidation/Licence";

export default function validate(values) {
  let errors = {};

  errors = validateURL(errors, values.thesisURL);

  errors = validateDOI(errors, values.thesisDOI);

  errors = validateLicence(errors, values.thesisLicence);

  if (!values.thesisEmbargo) {
    errors.embargo = "Required";
  }

  return errors;
}
