import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import TextInput from "../components/formElements/TextInput";

describe("Text input", () => {
  test("On initial render value should be empty.", () => {
    render(<TextInput name="fullname" placeholder="Full Name" />);

    // check that the value is initially empty
    expect(screen.getByPlaceholderText(/full name/i).value).toEqual("");
  });

  test("User should be able to type into the textbox", () => {
    render(<TextInput name="fullname" placeholder="Full Name" />);

    // check that the value is initially empty
    expect(screen.getByPlaceholderText(/full name/i).value).toEqual("");

    // change the value to Test 123
    fireEvent.change(screen.getByPlaceholderText(/full name/i), {
      target: { value: "Test 123" },
    });

    // check that the value is Test 123
    expect(screen.getByPlaceholderText(/full name/i).value).toEqual("Test 123");
  });
});
