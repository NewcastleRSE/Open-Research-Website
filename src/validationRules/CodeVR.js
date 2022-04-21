import validateTitle from "../fieldValidation/Title";
import validateURL from "../fieldValidation/URL";
import validateDOI from "../fieldValidation/DOI";
import validateLicense from "../fieldValidation/License";

export default function validate(values) {
  let errors = {};

  errors = validateTitle(errors, values.codeTitle);

  errors = validateURL(errors, values.codeURL);

  errors = validateDOI(errors, values.codeDOI);

  if (!values.openSource) {
    errors.openSource = "Required";
  }

  if (values.openSource === "Yes") {
    errors = validateLicense(errors, values.codeLicense);
  }

  if (!values.codeRelease) {
    errors.codeRelease = "Required";
  }

  if (!values.codeConf) {
    errors.codeConf = "Required";
  }

  return errors;
}
