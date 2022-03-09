import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import App from "../components/App";

describe("App component", () => {
  it("on initial render, prev button should be disabled", async () => {
    render(<App />);

    expect(await screen.findByRole("button", { name: /prev/i })).toBeDisabled();
  });

  it("once form fields have been correctly filled, the next button moves to the next page", () => {
    render(<App />);

    userEvent.type(screen.getByPlaceholderText(/full name/i), "Test 123");

    userEvent.selectOptions(
      screen.queryByTestId("faculty"),
      //screen.getByRole("combobox", { name: "Faculty" }),
      screen.getByRole("option", { name: "SAgE" })
    );

    userEvent.selectOptions(
      screen.queryByTestId("school"),
      //screen.getByRole("combobox", { name: "School" }),
      screen.getByRole("option", { name: "School of Computing" })
    );

    userEvent.selectOptions(
      screen.queryByTestId("careerStage"),
      screen.getByRole("option", { name: "Early career" })
    );

    fireEvent.click(screen.getByRole("button", { name: "Next" }));

    expect(
      screen.getByRole("heading", { name: "Project" })
    ).toBeInTheDocument();
  });
});
