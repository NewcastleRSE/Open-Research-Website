import validateTitle from "../fieldValidation/Title";
import validateURL from "../fieldValidation/URL";
import validateDOI from "../fieldValidation/DOI";
import validateLicense from "../fieldValidation/License";

export default function validate(values) {
  let errors = {};

  errors = validateTitle(errors, values.dataTitle);

  errors = validateURL(errors, values.dataURL);

  errors = validateDOI(errors, values.dataDOI);

  errors = validateLicense(errors, values.dataLicense);

  if (!values.format) {
    errors.format = "Required";
  }

  return errors;
}
