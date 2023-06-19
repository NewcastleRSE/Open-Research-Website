import validateTitle from "../fieldValidation/Title";
import validateURL from "../fieldValidation/URL";
import validateDOI from "../fieldValidation/DOI";
import validateLicense from "../fieldValidation/License";
import validationRequirements from "../util/data/validationRequirements";

export default function validate(values, section) {
  console.log(values, section);
  let errors = {};

  // Validate required fields for this section
  const requiredFields = validationRequirements[section] || [];
  for (let field of requiredFields) {
    if (!values[field]) {
      errors[field] = "Required";
    }
  }

  // General validation - all entries have these
  errors = validateTitle(errors, values.title);
  errors = validateURL(errors, values.url);

  // Specific validation - not all entries have these
  if (validationRequirements[section].doi) {
    errors = validateDOI(errors, values.doi);
  }
  if (validationRequirements[section].license) {
    errors = validateLicense(errors, values.license);
  }

  console.log(errors);

  return errors;
}
