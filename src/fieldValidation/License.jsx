export default function validateLicencse(errors, license) {
  const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

  // License
  if (!license) {
    console.log("hi");
    errors.license = "License is required";
  } else if (specialChars.test(license)) {
    errors.license = "No special characters allowed";
  }

  return errors;
}
