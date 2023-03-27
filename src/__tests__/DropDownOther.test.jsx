import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

    fireEvent.click(screen.getByRole("option", { name: "School/ Institute" }), {
      target: { value: "Medical School" },
    });

    expect(
      screen.getByRole("option", { name: "School/ Institute" }).value
    ).toBe("Medical School");
  });
});
