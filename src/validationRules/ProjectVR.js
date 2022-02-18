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
  }

  if (!length) {
    errors.length = "Required";
  }

  return errors;
}
