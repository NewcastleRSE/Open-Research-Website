import React, { useState, useEffect } from "react";

import Project from "../forms/Project";
import DropDown from "../formElements/DropDown";
import validateProject from "../../validationRules/ProjectVR";
import axios from "axios";

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

  const [orcidProjects, setOrcidProjects] = useState([]);

  useEffect(() => {
    // Load data from strapi
    console.log(formData);
    fetchOrcidProjects();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchOrcidProjects = async () => {
    // axios request
    axios
      .get("http://localhost:1337/api/orcid", {
        params: {
          id: formData.Researcher.orcidID,
        },
      })
      .then((res) => {
        setOrcidProjects(res.data.group);
      })
      .catch((err) => {
        console.log(err);
        return err.response;
      });

    let res = await axios
      .get("http://localhost:1337/api/orcid", {
        params: {
          id: formData.Researcher.orcidID,
        },
      })
      .catch((err) => {
        console.log(err);
        return err.response;
      });
    try {
      setOrcidProjects(res.data.group);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(orcidProjects);
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
        </div>
      );
    } else {
      return null;
    }
  };

  const handleDelete = (e) => {
    // eslint-disable-line no-unused-vars
    e.preventDefault();

    if (formData.Project.projectName) {
    }
  };

  const getTitles = (e) => {
    let titles = orcidProjects.map((project) => {
      return { value: project["work-summary"]["0"].title.title.value };
    });

    return titles;
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
          getTitles(),
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
