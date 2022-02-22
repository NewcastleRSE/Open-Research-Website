export default function validateResearcher({
  fullName,
  faculty,
  school,
  otherSchool,
  careerStage,
}) {
  let errors = {};

  if (!fullName) {
    errors.fullName = "Required";
  }

  if (!faculty) {
    errors.faculty = "Required";
  }

  if (!school) {
    errors.school = "Required";
  } else if (school === "other") {
    if (!otherSchool) {
      errors.otherSchool = "Required";
    }
  }

  if (!careerStage) {
    errors.careerStage = "Required";
  }

  return errors;
}
