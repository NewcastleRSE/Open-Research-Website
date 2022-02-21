export default function validateLicence(errors, licence) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  // Licence
  if (!licence) {
    errors.licence = "Licence is required";
  } else if (specialChars.test(licence)) {
    errors.licence = "No special characters allowed";
  }

  return errors;
}
