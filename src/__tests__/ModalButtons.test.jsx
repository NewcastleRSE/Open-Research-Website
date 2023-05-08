import { test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModalButtons from "../components/formElements/ModalButtons";
import React from "react";

function createMockFunction() {
  const mockFn = (...args) => {
    mockFn.calls.push(args);
  };

  mockFn.calls = [];
  return mockFn;
}

test("ModalButtons component - Cancel button should call handleCancel function when clicked", async () => {
  const handleCancelMock = createMockFunction();
  const handleSubmitMock = createMockFunction();

  render(
    <ModalButtons
      handleCancel={handleCancelMock}
      handleSubmit={handleSubmitMock}
    />
  );

  userEvent.click(screen.getByRole("button", { name: /cancel/i }));

  await waitFor(() => {
    expect(handleCancelMock.calls.length).toBe(1);
    expect(handleSubmitMock.calls.length).toBe(0);
  });
});

test("ModalButtons component - Submit button should call handleSubmit function when clicked", async () => {
  const handleCancelMock = createMockFunction();
  const handleSubmitMock = createMockFunction();

  render(
    <ModalButtons
      handleCancel={handleCancelMock}
      handleSubmit={handleSubmitMock}
    />
  );

  userEvent.click(screen.getByRole("button", { name: /submit/i }));

  await waitFor(() => {
    expect(handleCancelMock.calls.length).toBe(0);
    expect(handleSubmitMock.calls.length).toBe(1);
  });
});
