import React, { useState, useEffect } from "react";

import ProjectModal from "../formModals/ProjectModal";
import DropDown from "../formElements/DropDown";
import validateProject from "../../validationRules/ProjectVR";
import axios from "axios";

function ProjectInfo({
  formData,
  setFormData,
  display,
  setDisplay,
  selectedProject,
  setSelectedProject,
}) {
  const [projects, setProjects] = useState([]);
  const [displayOutput, setDisplayOutput] = useState(false);
  const [errors, setErrors] = useState({});

  const handleAddProject = (project) => {
    const updatedProjects = [...projects, project];
    setProjects(updatedProjects);
    setFormData({ ...formData, Projects: updatedProjects });
  };

  const handleRemove = () => {
    if (selectedProject) {
      // filters through and removes the selected project
      const updatedProjects = formData.Projects.filter(
        (project) => project.projectName !== selectedProject.projectName
      );
      setProjects(updatedProjects);
      // resets the project to blank (project in this case is the selected project) also removes the project from the list of saved projects
      setFormData({
        ...formData,
        Project: {
          projectName: "",
          researchArea: "",
          funder: "",
          otherFunder: "",
          length: "",
        },
        Projects: updatedProjects,
      });
      setSelectedProject(null);
    }
  };

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
    // fetchOrcidProjects();
    fetchProjects();
  }, [formData.projects]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchProjects = () => {
    setProjects(formData.Projects);
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
    setDisplay(!display);
    setDisplayOutput(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validateProject(projectInfo);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      handleAddProject(projectInfo);
      setDisplayOutput(true);
    }

    setErrors({});
    setDisplay(!display);
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setErrors({});
    setDisplay(!display);
  };

  const displayProject = () => {
    if (selectedProject) {
      return (
        <div className="margin_top_sm">
          <div className="Projects__Output">
            <div className="Projects__OutputTop">
              <h3 className="main_question background">Selected project:</h3>
              <button
                className={`Projects__DeleteBtn ${display && ""}`}
                onClick={(e) => handleRemove(e)}
              >
                Remove
              </button>
            </div>
            <h6>Title</h6>
            <p>{selectedProject.projectName}</p>
            <h6>Research Area</h6>
            <p>
              {selectedProject.researchArea || "No research area selected."}
            </p>
            <h6>Funder</h6>
            <p>{selectedProject.funder || "No funder selected."}</p>
            <h6>Project Length (months)</h6>
            <p>{selectedProject.length || "No length selected."}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  const getOrcidTitles = (e) => {
    let titles = orcidProjects.map((project) => {
      return { value: project["work-summary"]["0"].title.title.value };
    });

    return titles;
  };

  const getTitles = () => {
    if (formData.Projects.length === 0) {
      return [];
    }

    return formData.Projects.map((proj) => ({ value: proj.projectName }));
  };

  const handleDropdownChange = (e) => {
    const selectedProjectTitle = e.target.value;
    const selected = formData.Projects.find(
      (project) => project.projectName === selectedProjectTitle
    );
    setFormData({ ...formData, Project: selected });
    setSelectedProject(selected);
  };

  return (
    <div className="step">
      <h2>Project</h2>
      <h3 className="main_question">
        Please select a project from ORCID or add a new one.
      </h3>
      {/* <DropDown
        name="orcidProject"
        options={getOrcidTitles()}
        placeholder="ORCID Projects"
        value={formData.orcidProject}
        onChange={(event) => {
          setFormData({ ...formData, orcidProject: event.target.value });
          displayProject();
        }}
      /> */}
      <DropDown
        name="example"
        placeholder="Projects"
        options={getTitles()}
        onChange={handleDropdownChange}
        value={selectedProject?.projectName || ""}
      />
      <button
        type="button"
        className="forward wide"
        onClick={(e) => handleClick(e)}
      >
        Add New Project
      </button>
      <ProjectModal
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
