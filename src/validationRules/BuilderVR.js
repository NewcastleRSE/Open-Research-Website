export default function validateBuilder(values) {
  let errors = {};
  // values = {article: true, monograph: false, dataset: false, code: false}
  // it's an object that has key value pairs with the ouputs as keys and whether they were checked as the values. Object.entries extracts the key and value of each one and then it filters through and finds all the values that are true. If i.length === 0 it means no output was selected and all the values are false.
  let i = Object.entries(values).filter(([, value]) => value);
  if (i.length === 0) {
    errors.builder = "Please select at least 1 output type";
  }
  return errors;
}
