import { render, screen, fireEvent, getByTestId } from "@testing-library/react";

import DropDown from "../components/formElements/DropDown";

describe("Dropdown input", () => {
  it("should correctly set default option", () => {
    render(
      <DropDown
        name="faculty"
        placeholder="Faculty"
        options={[{ value: "SAgE" }, { value: "HaSS" }, { value: "FMS" }]}
      />
    );

    expect(screen.getByRole("option", { name: "Faculty" }).selected).toBe(true);
  });

  it("should be able to select a Faculty from the dropdown", async () => {
    render(
      <DropDown
        name="faculty"
        placeholder="Faculty"
        options={[{ value: "SAgE" }, { value: "HaSS" }, { value: "FMS" }]}
        defaultValue=""
      />
    );

    fireEvent.change(screen.getByRole("option", { name: "Faculty" }), {
      target: { value: "SAgE" },
    });

    expect(screen.getByRole("option", { name: "Faculty" }).selected).toBe(true);
  });
});
