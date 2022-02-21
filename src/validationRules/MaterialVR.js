import validateURL from "../fieldValidation/URL";

export default function validate(values) {
  let errors = {};

  errors = validateURL(errors, values.materialURL);

  if (!values.materialReproduction) {
    errors.materialReproduction = "Required";
  }

  if (!values.materialRelease) {
    errors.materialRelease = "Required";
  }

  return errors;
}
