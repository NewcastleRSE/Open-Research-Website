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
  const [errors, setErrors] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [orcidProjects, setOrcidProjects] = useState([]);
  const [projectInfo, setProjectInfo] = useState({
    projectName: "",
    researchArea: "",
    funder: "",
    otherFunder: "",
    length: "",
  });

  // handles adding a project
  const handleAddProject = (project) => {
    // do not refactor - copys are created for immutability.
    // update projects
    const updatedProjects = [...projects, project];
    setProjects(updatedProjects);
    // update formData with the updated projects
    const updatedFormData = { ...formData, Projects: updatedProjects };
    setFormData(updatedFormData);
  };

  // handles editing a project
  const handleEditProject = (project) => {
    // search for the project that was being edited (selectedProject) in the list of projects (proj's) and updates it with the edited version (project) if it can find it
    const updatedProjects = formData.Projects.map((proj) =>
      JSON.stringify(proj) === JSON.stringify(selectedProject) ? project : proj
    );

    // can now update the selected project with the edited version
    setSelectedProject(project);
    // update the projects list
    setProjects(updatedProjects);
    // update formData then set it
    const updatedFormData = {
      ...formData,
      Project: project,
      Projects: updatedProjects,
    };
    setFormData(updatedFormData);
  };

  // handles removing a project
  const handleRemove = () => {
    // if a project has been selected continue (safeguard)
    if (selectedProject) {
      // filters through and removes the selected project from formData
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

  // handles opening the form to edit project
  const handleEdit = (e) => {
    // if a project has been selected continue (safeguard)
    if (selectedProject) {
      // need to ensure edit mode is enabled to ensure the correct formData is populated into the editting form
      setEditMode(true);
      // update the project info to match the project that needs to be editted (this will ensure the form is filled out, ready to be edited)
      setProjectInfo(selectedProject);
      handleClick(e);
    }
  };

  // will pull in new projects that have been added
  useEffect(() => {
    // fetchOrcidProjects();
    fetchProjects();
  }, [formData.projects]); // eslint-disable-line react-hooks/exhaustive-deps

  // fetch normal projects
  const fetchProjects = () => {
    setProjects(formData.Projects);
  };

  // fetch orcid projects
  // this will link up with an orcid ID and pull from the API
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

  // handles project form pop up
  const handleClick = (e) => {
    e.preventDefault();
    setDisplay(!display);
  };

  // handles submitting and saving a project
  const handleSubmit = (e) => {
    e.preventDefault();
    // runs validation and sets the errors to any that are returned
    let newErrors = validateProject(projectInfo);
    setErrors(newErrors);
    // if there are no errors then the form can be edited or submitted
    if (Object.keys(newErrors).length === 0) {
      // edit an existing project
      if (editMode) {
        handleEditProject(projectInfo);
        setEditMode(false);
        // add a new project
      } else {
        handleAddProject(projectInfo);
      }
      // wipe the project info
      wipeProjectInfo();
    }

    // reset errors so they don't show again when the modal opens
    setErrors({});
    // hide the modal
    setDisplay(!display);
  };

  // wipes project information
  const wipeProjectInfo = () => {
    setProjectInfo({
      projectName: "",
      researchArea: "",
      funder: "",
      otherFunder: "",
      length: "",
    });
  };

  // handles pressing the cancel button
  const handleCancel = (e) => {
    e.preventDefault();
    // removes errors and closes form modal
    setErrors({});
    setDisplay(!display);
  };

  // displays project information (selected project) below and allows the user to edit or remove the project
  const displayProject = () => {
    if (selectedProject) {
      return (
        <div className="margin_top_sm">
          {/* will ensure everything stays in the background when the display is open  */}
          <div className={`Projects__Output ${display && "background"}`}>
            <div className="Projects__OutputTop">
              <h3 className="main_question background">Selected project:</h3>
              <div className="Projects__buttons">
                <button
                  className={"Projects__Btn"}
                  onClick={(e) => handleEdit(e)}
                >
                  Edit
                </button>
                <button
                  className={"Projects__Btn"}
                  onClick={(e) => handleRemove(e)}
                >
                  Remove
                </button>
              </div>
            </div>
            <div>
              <section aria-labelledby="project-title">
                <h2
                  id="project-title"
                  className="Projects__SelectedProjectHeading"
                >
                  Title:
                </h2>
                <p className="Projects__SelectedProjectContent">
                  {selectedProject.projectName}
                </p>
              </section>
              <section aria-labelledby="project-research-area">
                <h2
                  id="project-research-area"
                  className="Projects__SelectedProjectHeading"
                >
                  Research Area:
                </h2>
                <p className="Projects__SelectedProjectContent">
                  {selectedProject.researchArea || "No research area selected."}
                </p>
              </section>
              <section aria-labelledby="project-funder">
                <h2
                  id="project-funder"
                  className="Projects__SelectedProjectHeading"
                >
                  Funder:
                </h2>
                <p className="Projects__SelectedProjectContent">
                  {selectedProject.funder || "No funder selected."}
                </p>
              </section>
              <section aria-labelledby="project-length">
                <h2
                  id="project-length"
                  className="Projects__SelectedProjectHeading"
                >
                  Project Length (months):
                </h2>
                <p className="Projects__SelectedProjectContent">
                  {selectedProject.length || "No length selected."}
                </p>
              </section>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  // returns orcid project titles
  const getOrcidTitles = () => {
    let titles = orcidProjects.map((project) => {
      return { value: project["work-summary"]["0"].title.title.value };
    });

    return titles;
  };

  // returns normal project titles
  const getTitles = () => {
    if (formData.Projects.length === 0) {
      return [];
    }
    return formData.Projects.map((proj) => ({ value: proj.projectName }));
  };

  // handles clicking on the dropdown menu
  const handleDropdownChange = (e) => {
    // sets the selected project to whatever the user clicks on
    const selectedProjectTitle = e.target.value;
    // returns the first project it finds with the same project title
    const selected = formData.Projects.find(
      (project) => project.projectName === selectedProjectTitle
    );
    // update the formData
    const updatedFormData = { ...formData, Project: selected };
    setFormData(updatedFormData);
    setSelectedProject(selected);
  };

  return (
    <div className="step">
      <h2 id="page-heading">Project</h2>
      <h3 className="main_question" id="project-instructions">
        Please select a project from ORCID or add a new one.
      </h3>
      <div role="region" aria-labelledby="page-heading">
        <DropDown
          id="dropdown menu for your projects"
          name="project dropdown menu"
          placeholder="Projects"
          options={getTitles()}
          onChange={handleDropdownChange}
          value={selectedProject?.projectName || ""}
          aria-label="Select project"
        />
        <button
          type="button"
          className="forward wide"
          onClick={(e) => handleClick(e)}
          aria-label="Add new project"
        >
          Add New Project
        </button>
      </div>
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
