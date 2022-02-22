import validateURL from "../fieldValidation/URL";
import validateLicence from "../fieldValidation/Licence";

export default function validate(values) {
  let errors = {};

  errors = validateURL(errors, values.dsURL);

  errors = validateLicence(errors, values.dsLicence);

  if (!values.dsEmbargo) {
    errors.format = "Required";
  }

  return errors;
}
