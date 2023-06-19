import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import validateProject from "../../validationRules/ProjectVR";

export const useProjectHandlers = (formData, setFormData) => {
  const [errors, setErrors] = useState({});

  // Validate and add a new project
  const handleAddProject = (project) => {
    let newErrors = validateProject(project);
    if (Object.keys(newErrors).length !== 0) {
      setErrors(newErrors);
      return;
    }
    project.id = uuidv4();
    const updatedProjects = [...formData.Projects, project];
    setFormData({ ...formData, Projects: updatedProjects });
  };

  // Validate and edit an existing project
  const handleEditProject = (project, selectedProject) => {
    let newErrors = validateProject(project);
    if (Object.keys(newErrors).length !== 0) {
      setErrors(newErrors);
      return;
    }
    const updatedProjects = formData.Projects.map((proj) =>
      proj.id === selectedProject.id ? project : proj
    );
    setFormData({
      ...formData,
      Projects: updatedProjects,
      Project: project,
    });
  };

  // Remove a project
  const handleRemove = (e, selectedProject) => {
    e.preventDefault();

    if (selectedProject) {
      const updatedProjects = formData.Projects.filter(
        (project) => project.id !== selectedProject.id
      );
      setFormData({
        ...formData,
        Projects: updatedProjects,
        Project: null,
      });
    }
  };

  return {
    handleAddProject,
    handleEditProject,
    handleRemove,
    errors,
    setErrors,
  };
};
