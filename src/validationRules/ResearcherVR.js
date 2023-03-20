export default function validateResearcher({
  fullName,
  faculty,
  school,
  otherSchool,
  careerStage,
  orcidID,
}) {
  let errors = {}

  if (!fullName) {
    errors.fullName = 'Required'
  }

  if (!faculty) {
    errors.faculty = 'Required'
  }

  if (!school) {
    errors.school = 'Required'
  } else if (school === 'other') {
    if (!otherSchool) {
      errors.otherSchool = 'Required'
    }
  }

  if (!careerStage) {
    errors.careerStage = 'Required'
  }

  // Uncomment to make OrcidID a required field
  // if (!orcidID) {
  //   errors.orcidID = 'Required'
  // } else if (!/\d{4}-\d{4}-\d{4}-\d{4}/g.test(orcidID)) {
  //   errors.orcidID = 'Must be a valid ORCID ID'
  // }

  return errors
}
