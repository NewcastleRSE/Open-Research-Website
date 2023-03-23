import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../components/App";

describe("App component", () => {
  test("Prev button should be disabled until the second page.", async () => {
    render(<App />);
    // checks if the prev button is disabled
    expect(screen.queryByRole("button", { name: /prev/i })).toBeDisabled();
  });

  test("Submit button shouldn't show up until the last page.", () => {
    render(<App />);
    // returns null if it can't find the button
    expect(screen.queryByRole("button", { name: /submit/i })).toEqual(null);
  });

  test("Once form fields have been correctly filled, the next button moves to the next page.", () => {
    render(<App />);

    // constants
    const fullName = screen.getByPlaceholderText(/full name/i);
    const facultyOption = screen.queryByTestId("faculty");
    const schoolOption = screen.queryByTestId("school");
    const careerOption = screen.queryByTestId("careerStage");
    const orcidId = screen.getByPlaceholderText(/orcid id/i);

    // test valid full name
    fireEvent.change(fullName, { target: { value: "Test 123" } });
    expect(fullName.value).toBe("Test 123");

    // test valid faculty option
    fireEvent.change(facultyOption, { target: { value: "SAgE" } });
    expect(facultyOption.value).toBe("SAgE");

    // test valid school option
    fireEvent.change(schoolOption, {
      target: { value: "School of Computing" },
    });
    expect(schoolOption.value).toBe("School of Computing");

    // test valid career option
    fireEvent.change(careerOption, { target: { value: "Early career" } });
    expect(careerOption.value).toBe("Early career");

    // test valid orcidID
    fireEvent.change(orcidId, { target: { value: "0000-0003-2786-4784" } });
    expect(orcidId.value).toBe("0000-0003-2786-4784");

    // test button press
    try {
      fireEvent.click(screen.getByRole("button", { name: "Next" }));
    } catch (err) {
      console.error(err);
    }

    // ensure heading changes from Researcher to Project (page changes)
    expect(
      screen.getByRole("heading", { name: "Project" })
    ).toBeInTheDocument();
  });

  test("Should not move to the next page when all fields are filled but full name is empty.", () => {
    render(<App />);

    // constants
    const fullName = screen.getByPlaceholderText(/full name/i);
    const facultyOption = screen.queryByTestId("faculty");
    const schoolOption = screen.queryByTestId("school");
    const careerOption = screen.queryByTestId("careerStage");
    const orcidId = screen.getByPlaceholderText(/orcid id/i);

    // test empty full name
    expect(fullName.value).toBe("");

    // test valid faculty option
    fireEvent.change(facultyOption, { target: { value: "SAgE" } });
    expect(facultyOption.value).toBe("SAgE");

    // test valid school option
    fireEvent.change(schoolOption, {
      target: { value: "School of Computing" },
    });
    expect(schoolOption.value).toBe("School of Computing");

    // test valid career option
    fireEvent.change(careerOption, { target: { value: "Early career" } });
    expect(careerOption.value).toBe("Early career");

    // test valid orcidID
    fireEvent.change(orcidId, { target: { value: "0000-0003-2786-4784" } });
    expect(orcidId.value).toBe("0000-0003-2786-4784");

    // test button press
    try {
      fireEvent.click(screen.getByRole("button", { name: "Next" }));
    } catch (err) {
      console.error(err);
    }

    // ensure heading stays the same as it should not have changed pages
    expect(
      screen.getByRole("heading", { name: "Researcher" })
    ).toBeInTheDocument();
  });

  test("Should not move to the next step when all form fields are empty.", () => {
    render(<App />);

    // test button press
    try {
      fireEvent.click(screen.getByRole("button", { name: "Next" }));
    } catch (err) {
      console.error(err);
    }

    // should not have chnaged page
    expect(
      screen.getByRole("heading", { name: "Researcher" })
    ).toBeInTheDocument();
  });

  test("Should not move to the next page when an invalid ORCID ID is entered.", () => {
    render(<App />);

    // constants
    const fullName = screen.getByPlaceholderText(/full name/i);
    const facultyOption = screen.queryByTestId("faculty");
    const schoolOption = screen.queryByTestId("school");
    const careerOption = screen.queryByTestId("careerStage");
    const orcidId = screen.getByPlaceholderText(/orcid id/i);

    // test valid full name
    fireEvent.change(fullName, { target: { value: "Test 123" } });
    expect(fullName.value).toBe("Test 123");

    // test valid faculty option
    fireEvent.change(facultyOption, { target: { value: "SAgE" } });
    expect(facultyOption.value).toBe("SAgE");

    // test valid school option
    fireEvent.change(schoolOption, {
      target: { value: "School of Computing" },
    });
    expect(schoolOption.value).toBe("School of Computing");

    // test valid career option
    fireEvent.change(careerOption, { target: { value: "Early career" } });
    expect(careerOption.value).toBe("Early career");

    // test invalid orcidID
    fireEvent.change(orcidId, { target: { value: "xxxx-xxxx" } });
    expect(orcidId.value).toBe("xxxx-xxxx");

    // test button press
    try {
      fireEvent.click(screen.getByRole("button", { name: "Next" }));
    } catch (err) {
      console.error(err);
    }
    // ensure heading stays the same as it should not have changed pages
    expect(
      screen.getByRole("heading", { name: "Researcher" })
    ).toBeInTheDocument();
  });

  test("Should move to the next page when no ORCID ID is entered.", () => {
    render(<App />);

    // constants
    const fullName = screen.getByPlaceholderText(/full name/i);
    const facultyOption = screen.queryByTestId("faculty");
    const schoolOption = screen.queryByTestId("school");
    const careerOption = screen.queryByTestId("careerStage");
    const orcidId = screen.getByPlaceholderText(/orcid id/i);

    // test valid full name
    fireEvent.change(fullName, { target: { value: "Test 123" } });
    expect(fullName.value).toBe("Test 123");

    // test valid faculty option
    fireEvent.change(facultyOption, { target: { value: "SAgE" } });
    expect(facultyOption.value).toBe("SAgE");

    // test valid school option
    fireEvent.change(schoolOption, {
      target: { value: "School of Computing" },
    });
    expect(schoolOption.value).toBe("School of Computing");

    // test valid career option
    fireEvent.change(careerOption, { target: { value: "Early career" } });
    expect(careerOption.value).toBe("Early career");

    // test empty but valid orcidID (non required paramater)
    fireEvent.change(orcidId, { target: { value: "" } });
    expect(orcidId.value).toBe("");

    // test button press
    try {
      fireEvent.click(screen.getByRole("button", { name: "Next" }));
    } catch (err) {
      console.error(err);
    }

    // ensure heading changes from Researcher to Project (page changes)
    expect(
      screen.getByRole("heading", { name: "Project" })
    ).toBeInTheDocument();
  });

  test("should be able to select other option for school and type an input.", () => {
    render(<App />);

    // constants
    const schoolOption = screen.queryByTestId("school");

    // set school option to other
    fireEvent.change(schoolOption, {
      target: { value: "other" },
    });

    // a text input should open below the school option so that the user can enter an "other school/ institute"
    expect(
      screen.getByPlaceholderText("Other School/ Institute")
    ).toBeInTheDocument();

    // input into the text box
    fireEvent.change(schoolOption, {
      target: { otherValue: "Test Other School" },
    });

    // the school other value (by virtue of the form design) should now equal whatever was input in the text box
    expect(schoolOption.otherValue).toBe("Test Other School");
  });

  test("Other value for school should not change unless the school value is Other.", () => {
    render(<App />);

    // constants
    const schoolOption = screen.queryByTestId("school");

    // change school option to equal Medical School, this should not cause a text input to open below
    fireEvent.change(schoolOption, {
      target: { value: "Medical School" },
    });

    // ensure that the text input has not been rendered
    expect(screen.queryAllByPlaceholderText("Other School/ Institute")).toEqual(
      []
    );
  });
});
