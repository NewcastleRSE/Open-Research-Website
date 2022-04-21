import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import UrlInput from "../components/formElements/UrlInput";

describe("URL input", () => {
  it("on initial render should be empty", () => {
    render(<UrlInput name="articleURL" placeholder="Article URL" />);

    expect(screen.getByPlaceholderText(/article url/i).value).toEqual("");
  });

  it("user should be able to type into the url input", () => {
    render(<UrlInput name="articleURL" placeholder="Article URL" />);

    userEvent.type(
      screen.getByPlaceholderText(/article url/i),
      "www.testing.com"
    );

    expect(screen.getByPlaceholderText(/article url/i).value).toEqual(
      "www.testing.com"
    );
  });
});
