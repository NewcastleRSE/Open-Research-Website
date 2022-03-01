import validateURL from "../fieldValidation/URL";

export default function validate(values) {
  let errors = {};

  errors = validateURL(errors, values.preRegURL);

  if (!values.preRegDistinction) {
    errors.preRegDistinction = "Required";
  }

  return errors;
}
