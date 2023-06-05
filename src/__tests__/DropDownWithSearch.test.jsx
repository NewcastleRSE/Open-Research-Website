import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DropDownWithSearchBar from "../components/formElements/DropDownWithSearch";
import { waitFor } from "@testing-library/react";

import React from "react";

const sampleOptions = [
  { value: "telephones are the number one way to communicate" },
  { value: "there is a potato growing under the ground" },
  { value: "once upon a time in a land far away" },
  { value: "it was the best of times, it was the worst of times" },
  { value: "luke, i am your father." },
  { value: "what's the story morning glory?" },
];

const handleChange = (event) => {
  event.target.value;
};

const renderDropDownWithSearchBar = (props = {}) => {
  return render(
    <DropDownWithSearchBar
      options={sampleOptions}
      name="test"
      placeholder="Search items"
      onChange={handleChange}
      {...props}
    />
  );
};

describe("DropDownWithSearchBar component", () => {
  test("renders input element with provided props", async () => {
    renderDropDownWithSearchBar();

    const inputElement = screen.getByPlaceholderText("Search items");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("name", "test");
  });

  test("shows dropdown options when input is clicked", async () => {
    renderDropDownWithSearchBar();

    const inputElement = screen.getByPlaceholderText("Search items");
    userEvent.click(inputElement);

    const options = await screen.findAllByRole("listitem");
    expect(options.length).toBe(sampleOptions.length);
  });

  test("filters and displays options based on search text", async () => {
    renderDropDownWithSearchBar();

    const inputElement = screen.getByPlaceholderText("Search items");
    userEvent.click(inputElement);

    userEvent.type(inputElement, "telephones");

    await waitFor(async () => {
      const visibleOptions = await screen.findAllByRole("listitem");
      expect(visibleOptions.length).toBe(1);
    });

    const option = await screen.findByText(
      "telephones are the number one way to communicate"
    );
    expect(option).toBeInTheDocument();
  });
  test("hides dropdown options when clicking outside", async () => {
    renderDropDownWithSearchBar();

    const inputElement = screen.getByPlaceholderText("Search items");
    userEvent.click(inputElement);

    fireEvent.mouseDown(document.body);

    const options = screen.queryAllByRole("listitem");
    expect(options.length).toBe(0);
  });

  test("renders error message when error prop is passed", async () => {
    renderDropDownWithSearchBar({ error: "An error occurred" });

    const errorElement = screen.getByText("An error occurred");
    expect(errorElement).toBeInTheDocument();
  });
});
