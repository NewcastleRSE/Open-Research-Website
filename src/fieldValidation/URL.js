export default function validateURL(errors, URL) {
  // URL
  if (!URL) {
    errors.URL = "URL is required";
  } else if (
    !/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(
      URL
    )
  ) {
    errors.URL = "Must be a valid URL";
  }

  return errors;
}
