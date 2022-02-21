import validateURL from "../fieldValidation/URL";
import validateDOI from "../fieldValidation/DOI";
import validateLicence from "../fieldValidation/Licence";

export default function validate(values) {
  let errors = {};

  errors = validateURL(errors, values.codeURL);

  errors = validateDOI(errors, values.codeDOI);

  if (!values.openSource) {
    errors.openSource = "Required";
  }

  if (values.openSource === "Yes") {
    errors = validateLicence(errors, values.codeLicence);
  }

  return errors;
}
