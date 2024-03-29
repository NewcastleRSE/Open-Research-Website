import { render, screen, fireEvent } from "@testing-library/react";
import DropDown from "../components/formElements/DropDown";
import React from "react";

describe("Dropdown input", () => {
  it("Should not be able to select the placeholder value as an option.", () => {
    render(
      <DropDown
        name="faculty"
        placeholder="Faculty"
        options={[{ value: "SAgE" }, { value: "HaSS" }, { value: "FMS" }]}
      />
    );

    // ensure the default option is selected
    expect(screen.getByRole("option", { name: "Faculty" }).disabled).toBe(true);
  });

  it("Should be able to select a Faculty from the dropdown and the value should change to the selected option.", () => {
    render(
      <DropDown
        name="faculty"
        placeholder="Faculty"
        options={[{ value: "SAgE" }, { value: "HaSS" }, { value: "FMS" }]}
        defaultValue=""
      />
    );

    // ensure the value is empty
    expect(screen.getByRole("option", { name: "Faculty" }).value).toBe("");

    // click on the dropdown and select SAgE
    fireEvent.click(screen.getByRole("option", { name: "Faculty" }), {
      target: { value: "SAgE" },
    });

    // ensure the value of Faculty is now SAgE
    expect(screen.getByRole("option", { name: "Faculty" }).value).toBe("SAgE");

    // ensure the value of Faculty is not Faculty
    expect(screen.getByRole("option", { name: "Faculty" }).value).not.toBe(
      "Faculty"
    );
  });
});
