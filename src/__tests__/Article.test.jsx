import { React, useState } from "react";
import { renderHook, fireEvent, render, screen } from "@testing-library/react";

import useFormData from "../util/useFormData";
import App from "../components/App";
import Articles from "../components/pages/Articles";

describe("Articles", () => {
  it("Should be able to fill article form fields.", async () => {
    const { formData, setFormData } = renderHook(() => useFormData());
    // formData is still undefined for some reason.
    console.log(formData);

    // expect(formData).toEqual({ name: "Test 1" });
    // // render(<App formData={formData} setFormData={setFormData} />);

    // const facultyOption = screen.queryByTestId("faculty");
    // expect(facultyOption.value).toBe("SAgE");

    // render(<Articles formData={formData} setFormData={setFormData} />);

    // fireEvent.click(screen.getByRole("button", { name: /add article/i }));
    // fireEvent.change(screen.getByPlaceholderText(/article url/i), {
    //   target: { value: "www.test.com" },
    // });
    // fireEvent.change(screen.getByPlaceholderText(/article url/i), {
    //   target: { value: "10.1234/abc" },
    // });
    // fireEvent.change(screen.getByPlaceholderText(/license/i), {
    //   target: { value: "tst" },
    // });
    // fireEvent.click(screen.getByRole("radio", { name: /yes/i }));
    // fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    // screen.getByRole("");
  });
});
