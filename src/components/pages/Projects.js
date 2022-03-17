import React, { useState } from "react";

import Project from "../forms/Project";
import DropDown from "../formElements/DropDown";
import validateProject from "../../validationRules/ProjectVR";

function ProjectInfo({ formData, setFormData }) {
  const [display, setDisplay] = useState(false);

  const [errors, setErrors] = useState({});

  const [projectInfo, setProjectInfo] = useState({
    projectName: "",
    researchArea: "",
    funder: "",
    otherFunder: "",
    length: "",
  });

  const handleClick = (e) => {
    e.preventDefault();

    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validateProject(projectInfo);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      formData.Project = projectInfo;

      setErrors({});
      setDisplay(!display);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setErrors({});
    setDisplay(!display);
  };

  const displayProject = () => {
    if (formData.Project.projectName) {
      return (
        <>
          <div>Selected project:</div>
          <p>{formData.Project.projectName}</p>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="step">
      <h2>Project</h2>
      <label>ORICD Projects</label>
      <DropDown
        name="projects"
        placeholder="Select"
        options={[
          // ordid projects
          { value: "Project 1" },
          { value: "Project 2" },
          { value: "Project 3" },
        ]}
      />
      <button type="button" className="forward" onClick={(e) => handleClick(e)}>
        Add New Project
      </button>
      <Project
        show={display}
        formData={projectInfo}
        setFormData={setProjectInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        errors={errors}
      />
      <p>{displayProject()}</p>
    </div>
  );
}

export default ProjectInfo;
