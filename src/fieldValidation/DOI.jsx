import doiRegex from "doi-regex";

export default function validateDOI(errors, DOI) {
  // DOI
  // if (!DOI) {
  //   errors.DOI = "DOI is required";
  // } else if (!doiRegex({ exact: true }).test(DOI)) {
  //   errors.DOI = "Must be a valid DOI";
  // }

  return errors;
}
