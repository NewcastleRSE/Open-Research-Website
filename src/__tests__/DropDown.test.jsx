import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

    userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "SAgE" })
    );

    expect(screen.getByRole("option", { name: "SAgE" }).selected).toBe(true);
  });
});
