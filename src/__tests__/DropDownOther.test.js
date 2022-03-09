import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import DropDownOther from "../components/formElements/DropDownOther";

describe("DropDownOther", () => {
  it("should correctly set default option", () => {
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

    expect(
      screen.getByRole("option", { name: "School/ Institute" }).selected
    ).toBe(true);
  });

  it("should be able to select a school from the dropdown", () => {
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

    userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "Medical School" })
    );

    expect(
      screen.getByRole("option", { name: "Medical School" }).selected
    ).toBe(true);
  });

  it("should be able to enter other option", () => {
    let value = "";
    render(
      <DropDownOther
        name="school"
        placeholder="School/ Institute"
        options={[
          { value: "School of Computing" },
          { value: "Business School" },
          { value: "Medical School" },
        ]}
        value={value}
        onChange={(e) => (value = e.target.value)}
      />
    );

    userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "Other" })
    );

    expect(screen.getByRole("option", { name: "Other" }).selected).toBe(true);
    //screen.getByRole("");

    userEvent.type(screen.getByPlaceholderText(/other/i), "Other School");

    expect(screen.getByPlaceholderText(/other/i).value).toEqual("Other School");
  });
});
