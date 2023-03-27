export default function validateTitle(errors, title) {
  if (!title) {
    errors.title = "Title is required";
  }

  return errors;
}
