import validateURL from "../fieldValidation/URL";
import validateDOI from "../fieldValidation/DOI";
import validateLicense from "../fieldValidation/License";

export default function validate(values) {
  let errors = {};

  errors = validateURL(errors, values.codeURL);

  errors = validateDOI(errors, values.codeDOI);

  if (!values.openSource) {
    errors.openSource = "Required";
  }

  if (values.openSource === "Yes") {
    errors = validateLicense(errors, values.codeLicense);
  }

  return errors;
}
