import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import TextInput from "../components/formElements/TextInput";

describe("Text input", () => {
  it("on initial render value should be empty", () => {
    render(<TextInput name="fullname" placeholder="Full Name" />);

    expect(screen.getByPlaceholderText(/full name/i).value).toEqual("");
  });

  it("user should be able to type into the textbox", () => {
    render(<TextInput name="fullname" placeholder="Full Name" />);

    userEvent.type(screen.getByPlaceholderText(/full name/i), "Test 123");

    expect(screen.getByPlaceholderText(/full name/i).value).toEqual("Test 123");
  });
});
