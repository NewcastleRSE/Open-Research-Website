import React, { useState, useEffect } from "react";

import Project from "../forms/Project";
import DropDown from "../formElements/DropDown";
import validateProject from "../../validationRules/ProjectVR";
import axios from "axios";

function ProjectInfo({ formData, setFormData }) {
  const [display, setDisplay] = useState(false);
  const [projects, setProjects] = useState([]);
  const [errors, setErrors] = useState({});
  const [displayOutput, setDisplayOutput] = useState(true);

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
    fetchProjects();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchProjects = async () => {
    try {
      setProjects(formData.Projects);
      console.log(projects);
      console.log("set projects");
    } catch (err) {
      console.log(err);
    }
  };

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
    setDisplayOutput(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validateProject(projectInfo);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      formData.Project = projectInfo;
      formData.Projects.push(formData.Project);
      setDisplayOutput(true);
    }

    console.log(e);

    setErrors({});
    setDisplay(!display);
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
          {displayOutput ? (
            <div className="Projects__Output">
              <div className="Projects__OutputTop">
                <h3 className="main_question">Selected project:</h3>
                <button
                  className="Projects__DeleteBtn"
                  onClick={(e) => handleDelete(e)}
                >
                  Remove
                </button>
              </div>
              <h6>Title</h6>
              <p>{title}</p>
              <h6>Research Area</h6>
              <p>
                {projectInfo.researchArea
                  ? formData.Project.researchArea
                  : "No research area selected."}
              </p>
              <h6>Funder</h6>
              <p>
                {formData.Project.funder
                  ? formData.Project.funder
                  : "No funder selected."}
              </p>
              <h6>Project Length (months)</h6>
              <p>
                {formData.Project.length
                  ? formData.Project.funder
                  : "No length selected"}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      );
    } else {
      return null;
    }
  };

  const handleDelete = (e) => {
    // eslint-disable-line no-unused-vars
    e.preventDefault();
    // remove the project from db
    setDisplayOutput(false);
    setProjectInfo({
      projectName: "",
      researchArea: "",
      funder: "",
      otherFunder: "",
      length: "",
    });
  };

  const getTitles = (e) => {
    let titles = orcidProjects.map((project) => {
      return { value: project["work-summary"]["0"].title.title.value };
    });
    let titles2 = projects.map((project) => project.projectName);
    return titles2;
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
        options={[getTitles()]}
        value={formData.orcidProject}
        onChange={(event) => {
          setFormData({ ...formData, orcidProject: event.target.value });
          displayProject();
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
