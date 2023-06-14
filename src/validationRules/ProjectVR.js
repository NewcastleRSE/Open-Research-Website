import validateURL from "../fieldValidation/URL";

export default function validateProject({
  title,
  researchArea,
  funder,
  type,
  url,
  length,
}) {
  let errors = {};

  if (!title) {
    errors.title = "Required";
  }

  if (!researchArea) {
    errors.researchArea = "Required";
  }

  if (!funder) {
    errors.funder = "Required";
  }

  errors = validateURL(errors, url);

  if (!type) {
    errors.type = "Required";
  }

  if (!length) {
    errors.length = "Required";
  } else if (length <= 0) {
    errors.length = "Length must be positive and greater than 0";
  }

  return errors;
}
