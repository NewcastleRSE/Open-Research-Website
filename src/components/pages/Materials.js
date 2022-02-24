import React, { useState } from "react";

import Material from "../forms/Material";
import validate from "../../validationRules/MaterialVR";

function Materials({ formData, setFormData }) {
  const [display, setDisplay] = useState(false);

  const [errors, setErrors] = useState({});

  const [materialInfo, setMaterialInfo] = useState({
    materialURL: "",
    materialReproduction: false,
    materialRelease: false,
  });

  const handleClick = (e) => {
    e.preventDefault();

    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(materialInfo);
    setErrors(newErrors);

    if (
      !newErrors.URL &&
      !newErrors.materialReproduction &&
      !newErrors.materialRelease
    ) {
      formData.materials.push(materialInfo);

      setMaterialInfo({
        materialURL: "",
        materialReproduction: false,
        materialRelease: false,
      });

      setDisplay(!display);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setMaterialInfo({
      materialURL: "",
      materialReproduction: false,
      materialRelease: false,
    });

    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, material) => {
    e.preventDefault();

    let filteredArray = formData.materials.filter((item) => item !== material);
    setFormData({ ...formData, materials: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Research Materials</h2>
        {formData.Material.map((material) => (
          <div className="output-type row">
            <h4 className="output-title col">{material.materialURL}</h4>
            <span className="output-delete">
              <p onClick={(e) => handleDelete(e, material)}>Remove</p>
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

      <Material
        show={display}
        formData={materialInfo}
        setFormData={setMaterialInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        errors={errors}
      />
    </div>
  );
}

export default Materials;
