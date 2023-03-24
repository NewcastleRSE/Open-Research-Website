export default function validateBuilder(values) {
  let errors = {};

  if (!values) {
    errors.builder = "Please select at least 1 output type";
  }

  return errors;
}
