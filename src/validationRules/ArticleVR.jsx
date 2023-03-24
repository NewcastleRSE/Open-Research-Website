import validateTitle from "../fieldValidation/Title";
import validateURL from "../fieldValidation/URL";
import validateDOI from "../fieldValidation/DOI";
import validateLicense from "../fieldValidation/License";

export default function validate(values) {
  let errors = {};

  errors = validateTitle(errors, values.articleTitle);

  errors = validateURL(errors, values.articleURL);

  errors = validateDOI(errors, values.articleDOI);

  errors = validateLicense(errors, values.articleLicense);

  // Embargo
  if (!values.articleEmbargo) {
    errors.embargo = "Required";
  }

  return errors;
}
