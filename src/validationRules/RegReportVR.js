import validateTitle from "../fieldValidation/Title";
import validateURL from "../fieldValidation/URL";

export default function validate(values) {
  let errors = {};

  errors = validateTitle(errors, values.regReportTitle);

  errors = validateURL(errors, values.regReportURL);

  if (!values.regReportFunding) {
    errors.regReportFunding = "Required";
  }

  if (!values.regReportPeerRev) {
    errors.regReportPeerRev = "Required";
  }

  if (!values.regReportChanges) {
    errors.regReportChanges = "Required";
  }

  return errors;
}
