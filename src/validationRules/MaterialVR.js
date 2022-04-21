import validateTitle from "../fieldValidation/Title";
import validateURL from "../fieldValidation/URL";

export default function validate(values) {
  let errors = {};

  errors = validateTitle(errors, values.materialTitle);

  errors = validateURL(errors, values.materialURL);

  if (!values.materialReproduction) {
    errors.materialReproduction = "Required";
  }

  if (!values.materialRelease) {
    errors.materialRelease = "Required";
  }

  return errors;
}
