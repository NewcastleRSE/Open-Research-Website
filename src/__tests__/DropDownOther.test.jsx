import { render, screen, fireEvent } from "@testing-library/react";

import DropDownOther from "../components/formElements/DropDownOther";

describe("DropDownOther", () => {
  it("Should not be able to select the placeholder value as an option.", () => {
    render(
      <DropDownOther
        name="school"
        placeholder="School/ Institute"
        options={[
          { value: "School of Computing" },
          { value: "Business School" },
          { value: "Medical School" },
        ]}
      />
    );

    // ensure the default value is correct
    expect(
      screen.getByRole("option", { name: "School/ Institute" }).disabled
    ).toBe(true);
  });

  it("Should be able to select a school from the dropdown menu.", () => {
    render(
      <DropDownOther
        name="school"
        placeholder="School/ Institute"
        options={[
          { value: "School of Computing" },
          { value: "Business School" },
          { value: "Medical School" },
        ]}
      />
    );

    // ensure the default value is empty
    expect(
      screen.getByRole("option", { name: "School/ Institute" }).value
    ).toBe("");

    // click on the dropdown and select Medical School
    fireEvent.click(screen.getByRole("option", { name: "School/ Institute" }), {
      target: { value: "Medical School" },
    });

    // ensure the value is now set to Medical School
    expect(
      screen.getByRole("option", { name: "School/ Institute" }).value
    ).toBe("Medical School");

    // ensure the value is not the default value
    expect(
      screen.getByRole("option", { name: "School/ Institute" }).value
    ).not.toBe("School/ Institute");
  });
});
