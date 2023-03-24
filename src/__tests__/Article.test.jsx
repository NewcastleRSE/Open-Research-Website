import { React, useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import useFormData from "../util/useFormData";
import Articles from "../components/pages/Articles";

describe("Articles", () => {
  it("Should be able to fill article form fields.", () => {
    const { formData, setFormData } = renderHook(() => useFormData());
    console.log(formData);
    render(<Articles formData={formData} setFormData={setFormData} />);

    fireEvent.click(screen.getByRole("button", { name: /add article/i }));
    fireEvent.change(screen.getByPlaceholderText(/article url/i), {
      target: { value: "www.test.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/article url/i), {
      target: { value: "10.1234/abc" },
    });
    fireEvent.change(screen.getByPlaceholderText(/license/i), {
      target: { value: "tst" },
    });
    fireEvent.click(screen.getByRole("radio", { name: /yes/i }));
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    screen.getByRole("");
  });
});
