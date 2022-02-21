import validateURL from "../fieldValidation/URL";
import validateDOI from "../fieldValidation/DOI";
import validateLicence from "../fieldValidation/Licence";

export default function validate(values) {
  let errors = {};

  errors = validateURL(errors, values.dataURL);

  errors = validateDOI(errors, values.dataDOI);

  errors = validateLicence(errors, values.dataLicence);

  if (!values.format) {
    errors.format = "Required";
  }

  return errors;
}
