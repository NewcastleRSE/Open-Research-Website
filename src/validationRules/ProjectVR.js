export default function validateProject({
  projectName,
  researchArea,
  funder,
  otherFunder,
  length,
}) {
  let errors = {};

  if (!projectName) {
    errors.projectName = "Required";
  }

  if (!researchArea) {
    errors.researchArea = "Required";
  }

  if (!funder) {
    errors.funder = "Required";
  } else if (funder === "other") {
    if (!otherFunder) {
      errors.otherFunder = "Required";
    }
  }

  if (!length) {
    errors.length = "Required";
  }

  return errors;
}
