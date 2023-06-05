import { render, screen, fireEvent } from "@testing-library/react";
import NumberInput from "../components/formElements/NumberInput";
import React from "react";

describe("Number Input", () => {
  test("On intial render it should be empty.", () => {
    render(<NumberInput name="length" placeholder="Length(M)" />);

    // ensure that the value is empty
    expect(screen.getByPlaceholderText("Length(M)").value).toEqual("");
  });

  test("To ensure the NumberInputs value can be changed.", () => {
    render(<NumberInput name="length" placeholder="Length(M)" />);

    // ensure the value is empty
    expect(screen.getByPlaceholderText("Length(M)").value).toEqual("");

    // change the value to 24
    fireEvent.change(screen.getByPlaceholderText("Length(M)"), {
      target: { value: "24" },
    });

    // the value should now be 24
    expect(screen.getByPlaceholderText("Length(M)").value).toEqual("24");
  });
});
