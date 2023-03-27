import { render, screen, fireEvent } from "@testing-library/react";
import UrlInput from "../components/formElements/UrlInput";
import validateURL from "../fieldValidation/URL";

describe("URL input", () => {
  it("on initial render should be empty", () => {
    render(<UrlInput name="articleURL" placeholder="Article URL" />);

    // check that the initial value is empty
    expect(screen.getByPlaceholderText(/article url/i).value).toEqual("");
  });

  it("user should be able to type into the url input", () => {
    render(<UrlInput name="articleURL" placeholder="Article URL" />);

    // check that the initial value is empty
    expect(screen.getByPlaceholderText(/article url/i).value).toEqual("");

    // change value to www.testing.com
    fireEvent.change(screen.getByPlaceholderText(/article url/i), {
      target: { value: "www.testing.com" },
    });

    // check the value is www.testing.com
    expect(screen.getByPlaceholderText(/article url/i).value).toEqual(
      "www.testing.com"
    );

    // validation is not handled directly in this form element
  });
});
