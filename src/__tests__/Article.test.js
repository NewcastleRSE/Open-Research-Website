import { React, useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { renderHook } from "@testing-library/react-hooks";

import useFormData from "../util/useFormData";
import Articles from "../components/pages/Articles";

describe("Articles", () => {
  it("should be able to fill article form fields", () => {
    const { formData, setFormData } = renderHook(() => useFormData());

    console.log(formData);

    render(<Articles formData={formData} setFormData={setFormData} />);

    fireEvent.click(screen.getByRole("button", { name: /add article/i }));

    userEvent.type(screen.getByPlaceholderText(/article url/i), "www.test.com");
    userEvent.type(screen.getByPlaceholderText(/article doi/i), "10.1234/abc");
    userEvent.type(screen.getByPlaceholderText(/license/i), "tst");
    fireEvent.click(screen.getByRole("radio", { name: /yes/i }));

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    screen.getByRole("");
  });
});
