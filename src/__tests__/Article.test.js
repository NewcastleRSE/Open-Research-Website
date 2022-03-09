import { React, useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Articles from "../components/pages/Articles";

describe("Articles", () => {
  render(<Articles />);

  fireEvent.click(screen.getByRole("button", { name: /add article/i }));

  userEvent.type(screen.getByPlaceholderText(/article url/i), "www.test.com");
  userEvent.type(screen.getByPlaceholderText(/article doi/i), "10.1234/abc");
  userEvent.type(screen.getByPlaceholderText(/license/i), "tst");
  fireEvent.click(screen.getByRole("radio", { name: /yes/i }));

  fireEvent.click(screen.getByRole("button", { name: /submit/i }));

  expect(screen.getByText(/remove/i)).toBe(true);
  screen.getByRole("");
  expect(addToFormData).toHaveBeenCalledTimes(1);
});
