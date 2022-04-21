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
    if (formData.Project.projectName || formData.orcidProject) {
      var title = "";
      formData.Project.projectName
        ? (title = formData.Project.projectName)
        : (title = formData.orcidProject);
      return (
        <div className="margin_top_sm">
          <h3 className="main_question">Selected project:</h3>
          <p>{title}</p>
          <span className="output-delete">
            <p onClick={(e) => handleDelete(e)}>Remove</p>
          </span>
        </div>
      );
    } else {
      return null;
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();

    if (formData.Project.projectName) {
    }
  };

  return (
    <div className="step">
      <h2>Project</h2>
      <h3 className="main_question">
        Please select a project from ORCID or add a new one.
      </h3>
      <DropDown
        name="orcidProject"
        placeholder="ORCID Projects"
        options={[
          // ordid projects
          { value: "Project 1" },
          { value: "Project 2" },
          { value: "Project 3" },
        ]}
        value={formData.orcidProject}
        onChange={(event) => {
          setFormData({ ...formData, orcidProject: event.target.value });
        }}
      />
      <button
        type="button"
        className="forward wide"
        onClick={(e) => handleClick(e)}
      >
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
      <div>{displayProject()}</div>
    </div>
  );
}

export default ProjectInfo;
