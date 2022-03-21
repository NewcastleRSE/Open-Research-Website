import validateTitle from "../fieldValidation/Title";
import validateURL from "../fieldValidation/URL";
import validateDOI from "../fieldValidation/DOI";

export default function validate(values) {
  let errors = {};

  errors = validateTitle(errors, values.preprintTitle);

  errors = validateURL(errors, values.preprintURL);

  errors = validateDOI(errors, values.preprintDOI);

  if (!values.preprintRelease) {
    errors.preprintRelease = "Required";
  }

  return errors;
}
