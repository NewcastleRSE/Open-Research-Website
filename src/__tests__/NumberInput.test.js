import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import NumberInput from "../components/formElements/NumberInput";

describe("Number Input", () => {
  it("on intial render should be empty", () => {
    render(<NumberInput name="length" placeholder="Length(M)" />);

    expect(screen.getByPlaceholderText("Length(M)").value).toEqual("");
  });

  it("should be able to change the number", () => {
    render(<NumberInput name="length" placeholder="Length(M)" />);

    userEvent.type(screen.getByPlaceholderText("Length(M)"), "24");

    expect(screen.getByPlaceholderText("Length(M)").value).toEqual("24");
  });
});
