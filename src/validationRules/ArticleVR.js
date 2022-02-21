import validateURL from "../fieldValidation/URL";
import validateDOI from "../fieldValidation/DOI";
import validateLicence from "../fieldValidation/Licence";

export default function validate(values) {
  let errors = {};

  errors = validateURL(errors, values.articleURL);

  errors = validateDOI(errors, values.articleDOI);

  errors = validateLicence(errors, values.articleLicence);

  // Embargo
  if (!values.articleEmbargo) {
    errors.embargo = "Required";
  }

  return errors;
}
