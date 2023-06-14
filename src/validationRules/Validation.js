import validateTitle from "../fieldValidation/Title";
import validateURL from "../fieldValidation/URL";
import validateDOI from "../fieldValidation/DOI";
import validateLicense from "../fieldValidation/License";
import validationRequirements from "../util/data/validationRequirements";

export default function validate(values, section) {
  let errors = {};

  // Validate required fields for this section
  const requiredFields = validationRequirements[section] || [];
  for (let field of requiredFields) {
    if (!values[field]) {
      errors[field] = "Required";
    }
  }

  // Additional specific validation rules
  if (values.title) {
    errors = validateTitle(errors, values.title);
  }

  if (values.url) {
    errors = validateURL(errors, values.url);
  }

  if (values.doi) {
    errors = validateDOI(errors, values.doi);
  }

  if (values.license) {
    errors = validateLicense(errors, values.license);
  }

  return errors;
}
