import doiRegex from "doi-regex";

export default function validate(values) {
  let errors = {};

  // URL
  if (!values.articleURL) {
    errors.URL = "URL is required";
  } else if (
    !/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(
      values.articleURL
    )
  ) {
    errors.URL = "Must be a valid URL";
  }

  // DOI
  if (!values.articleDOI) {
    errors.DOI = "DOI is required";
  } else if (!doiRegex({ exact: true }).test(values.articleDOI)) {
    errors.DOI = "Must be a valid DOI";
  }

  // Licence
  if (!values.articleLicence) {
    errors.licence = "Licence is required";
  }

  // Embargo
  if (!values.articleEmbargo) {
    errors.embargo = "Required";
  }

  return errors;
}
