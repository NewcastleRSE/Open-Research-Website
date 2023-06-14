import { useState, useEffect } from "react";
import { ProjectModal } from "../formModals/Modals";
import DropDownWithSearch from "../formElements/DropDownWithSearch";
import validateProject from "../../validationRules/ProjectVR";
import React from "react";

function ProjectInfo({
  formData,
  setFormData,
  display,
  setDisplay,
  selectedProject,
  setSelectedProject,
  loaded,
  setLoaded,
}) {
  const [projects, setProjects] = useState([]);
  const [errors, setErrors] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState("orcid");

  const [projectInfo, setProjectInfo] = useState({
    title: "",
    researchArea: "",
    funder: "",
    length: "",
    type: "",
    url: "",
  });

  // handles adding a project
  const handleAddProject = (project) => {
    // Validate the project before updating
    let newErrors = validateProject(project);
    if (Object.keys(newErrors).length !== 0) {
      setErrors(newErrors);
      return;
    }
    // update projects
    const updatedProjects = [...formData.Projects, project];
    setFormData({ ...formData, Projects: updatedProjects });
  };

  // handles editing a project
  const handleEditProject = (project) => {
    // Validate the project before updating
    let newErrors = validateProject(project);
    if (Object.keys(newErrors).length !== 0) {
      setErrors(newErrors);
      return;
    }

    // update selected project
    setSelectedProject(project);

    // update projects list
    const updatedProjects = formData.Projects.map((proj) =>
      areObjectsEqual(proj, selectedProject) ? project : proj
    );
    setFormData({ ...formData, Projects: updatedProjects });
  };

  // Compares two objects for equality
  function areObjectsEqual(obj1, obj2) {
    return (
      Object.keys(obj1).length === Object.keys(obj2).length &&
      Object.keys(obj1).every((key) => obj1[key] === obj2[key])
    );
  }

  // handles removing a project
  const handleRemove = () => {
    if (selectedProject) {
      const updatedProjects = formData.Projects.filter(
        (project) => !areObjectsEqual(project, selectedProject)
      );
      setFormData({
        ...formData,
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
      // update the project info to match the project that needs to be edited (this will ensure the form is filled out, ready to be edited)
      setProjectInfo(selectedProject);
      handleClick(e);
    }
  };

  useEffect(() => {
    setFormData({ ...formData, Projects: formData.Projects });
  }, [formData.Projects]);

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
      // reset errors so they don't show again when the modal opens
      setErrors({});
      // hide the modal
      setDisplay(!display);
    }
  };

  // wipes project information
  const wipeProjectInfo = () => {
    setProjectInfo({
      title: "",
      researchArea: "",
      funder: "",
      length: "",
      type: "",
      url: "",
    });
  };

  // handles pressing the cancel button
  const handleCancel = (e) => {
    e.preventDefault();
    // removes errors and closes form modal
    setErrors({});
    setDisplay(!display);
  };

  useEffect(() => {
    const temp = [];
    formData.orcidProjects.map((project) => temp.push(project));
    formData.Projects.map((project) => temp.push(project));
    setProjects(temp);
  }, [formData.orcidProjects, formData.projects]);

  // displays project information (selected project) below and allows the user to edit or remove the project
  const displayProject = () => {
    if (selectedProject) {
      return (
        <div className="margin_top_sm">
          {/* will ensure everything stays in the background when the display is open  */}
          <div className={`Projects__Output ${display && "background"}`}>
            <div className="Projects__OutputTop">
              <h3 className="main_question background">Selected project:</h3>
              <div className={`${display && "background"} Projects__buttons`}>
                <button
                  className={"forward Projects__Btn"}
                  onClick={(e) => handleEdit(e)}
                >
                  Edit
                </button>
                <button
                  className={"backward Projects__Btn"}
                  onClick={(e) => handleRemove(e)}
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="Projects__SelectedContainer">
              <section
                className="Results__Item"
                aria-labelledby="project-title"
              >
                <h2
                  id="project-title"
                  className="Projects__SelectedProjectHeading"
                >
                  Title:
                </h2>
                <p className="Projects__SelectedProjectContent">
                  {selectedProject.title}
                </p>
              </section>
              <section
                className="Results__Item"
                aria-labelledby="project-research-area"
              >
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
              <section
                className="Results__Item"
                aria-labelledby="project-funder"
              >
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
              <section
                className="Results__Item"
                aria-labelledby="project-length"
              >
                <h2
                  id="project-length"
                  className="Projects__SelectedProjectHeading"
                >
                  Project Length:
                </h2>
                <p className="Projects__SelectedProjectContent">
                  {selectedProject.length
                    ? `${selectedProject.length} months`
                    : "No length selected."}
                </p>
              </section>
              <section className="Results__Item" aria-labelledby="project-type">
                <h2
                  id="project-type"
                  className="Projects__SelectedProjectHeading"
                >
                  Type:
                </h2>
                <p className="Projects__SelectedProjectContent">
                  {selectedProject.type
                    ? `${selectedProject.type}`
                    : "No type selected."}
                </p>
              </section>
              <section className="Results__Item" aria-labelledby="project-url">
                <h2
                  id="project-url"
                  className="Projects__SelectedProjectHeading"
                >
                  Url:
                </h2>
                <p className="Projects__SelectedProjectContent">
                  {selectedProject.url
                    ? `${selectedProject.url}`
                    : "No url selected."}
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

  // const getOrcidTitles = () => {
  //   let titles;

  //   if (formData.orcidProjects.length !== 0) {
  //     titles = formData.orcidProjects.map((project) => {
  //       return { value: project.title, label: project.title };
  //     });
  //   }

  //   if (titles) {
  //     return titles;
  //   } else {
  //     return getTitles();
  //   }
  // };

  // returns normal project titles
  const getTitles = () => {
    if (projects.length === 0) {
      return [];
    }
    const temp = [];
    projects.map((proj) => temp.push(proj.title));
    return temp;
  };

  // handles clicking on the dropdown menu
  const handleDropdownChange = (e, projectType) => {
    // sets the selected project to whatever the user clicks on
    const selectedProjectTitle = e.target.value;
    let selected;
    // returns the first project it finds with the same project title
    selected = projects.find(
      (project) => project.title === selectedProjectTitle
    );
    // if (projectType === "normal") {
    //   setSelectedProjectType("normal");
    //   selected = formData.Projects.find(
    //     (project) => project.title === selectedProjectTitle
    //   );
    // }
    // if (projectType === "orcid") {
    //   setSelectedProjectType("orcid");
    //   selected = formData.orcidProjects.find(
    //     (project) => project.title === selectedProjectTitle
    //   );
    // }

    const updatedFormData = { ...formData, Project: selected };
    setFormData(updatedFormData);
    setSelectedProject(selected);
  };

  return (
    <div className="step">
      <h2 id="page-heading">Project</h2>
      {formData.orcidProjects ? (
        <h3 className="main_question" id="project-instructions">
          Please select a project from ORCID or add a new one.
        </h3>
      ) : (
        <h3 className="main_question" id="project-instructions">
          Please select a project.
        </h3>
      )}
      <div role="region" aria-labelledby="page-heading">
        {/* {formData.orcidProjects && (
          <DropDownWithSearch
            id="dropdown menu for your projects"
            name="project dropdown menu"
            placeholder="Orcid Projects"
            options={getOrcidTitles()}
            onChange={(e) => handleDropdownChange(e, "orcid")}
            value={selectedProject?.title || ""}
            aria-label="Select Orcid project"
          />
        )} */}
        <DropDownWithSearch
          id="dropdown menu for your projects"
          name="project dropdown menu"
          placeholder="Projects"
          options={getTitles()}
          onChange={(e) => handleDropdownChange(e, "normal")}
          value={selectedProject?.title || ""}
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
