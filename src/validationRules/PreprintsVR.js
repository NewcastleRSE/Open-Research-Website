import validateURL from "../fieldValidation/URL";
import validateDOI from "../fieldValidation/DOI";

export default function validate(values) {
  let errors = {};

  errors = validateURL(errors, values.preprintURL);

  errors = validateDOI(errors, values.preprintDOI);

  if (!values.preprintRelease) {
    errors.preprintRelease = "Required";
  }

  return errors;
}
