import { useState } from "react";
import { MaterialModal } from "../formModals/Modals";
import validate from "../../validationRules/Validation";

import { v4 as uuidv4 } from "uuid";
import React from "react";

function Materials({ formData, setFormData, display, setDisplay }) {
  const [errors, setErrors] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [currMaterial, setCurrMaterial] = useState({});

  const [materialInfo, setMaterialInfo] = useState({
    title: "",
    url: "",
    reproduction: false,
    release: false,
    complete: true,
    selected: true,
  });

  const handleClick = (e) => {
    e.preventDefault();
    if (!editMode) {
      wipeMaterialInfo();
    }
    setDisplay(!display);
  };

  const wipeMaterialInfo = () => {
    setMaterialInfo({
      title: "",
      url: "",
      reproduction: false,
      release: false,
      complete: true,
      selected: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(materialInfo);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // materialInfo.materialRelease = str2bool(materialInfo.materialRelease);
      // materialInfo.materialReproduction = str2bool(materialInfo.materialReproduction);

      if (!editMode) {
        setFormData({
          ...formData,
          Material: [...formData.Material, { ...materialInfo, id: uuidv4() }],
        });
      } else {
        const updatedMaterials = formData.Material.map((i) =>
          i.id === currMaterial.id ? materialInfo : i
        );
        const updatedFormData = {
          ...formData,
          Material: updatedMaterials,
        };
        setFormData(updatedFormData);
      }

      wipeMaterialInfo();
      setErrors({});
      setDisplay(!display);
      setEditMode(false);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    wipeMaterialInfo();
    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, material) => {
    e.preventDefault();

    let filteredArray = formData.Material.filter((item) => item !== material);
    setFormData({ ...formData, Material: filteredArray });
  };

  const handleEdit = (e, material) => {
    e.preventDefault();

    setCurrMaterial(material);

    setMaterialInfo({
      ...material,
    });

    setEditMode(true);
    setDisplay(!display);
  };

  return (
    <div>
      <div>
        <h2>Research Materials</h2>
        {formData.Material.map((material, index) => (
          <div className="output-type row" key={index}>
            <h4 className="output-title col">{material.materialTitle}</h4>
            <span
              className="output-edit"
              style={{ cursor: "pointer", marginRight: "1rem" }}
            >
              {material.selected ? (
                <p onClick={(e) => handleToggleEntry(e, material)}>Deselect</p>
              ) : (
                <p onClick={(e) => handleToggleEntry(e, material)}>Select</p>
              )}
            </span>
            <span
              className="output-edit"
              style={{ cursor: "pointer", marginRight: "1rem" }}
            >
              <p onClick={(e) => handleEdit(e, material)}>Edit</p>
            </span>
            <span className="output-delete">
              {!material.orcid && (
                <p onClick={(e) => handleDelete(e, material)}>Delete</p>
              )}
            </span>
          </div>
        ))}
        <button
          type="button"
          className="forward"
          onClick={(e) => handleClick(e)}
        >
          Add Material
        </button>
      </div>

      <MaterialModal
        show={display}
        formData={materialInfo}
        setFormData={setMaterialInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        handleSave={handleSave}
        errors={errors}
      />
    </div>
  );
}

export default Materials;
