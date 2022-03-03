import { render, screen } from "@testing-library/react";
import App from "../components/App";
import "@testing-library/jest-dom/extend-expect";

test("on initial render, prev button should be disabled", async () => {
  render(<App />);

  expect(await screen.findByRole("button", { name: "Prev" })).toBeDisabled();
});
