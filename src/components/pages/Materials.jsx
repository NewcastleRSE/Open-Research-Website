import React, { useState } from "react";

import Material from "../forms/Material";
import validate from "../../validationRules/MaterialVR";
import str2bool from "../../util/str2bool";

function Materials({ formData, setFormData, display, setDisplay }) {
  const [errors, setErrors] = useState({});

  const [materialInfo, setMaterialInfo] = useState({
    materialTitle: "",
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

    if (Object.keys(newErrors).length === 0) {
      materialInfo.materialRelease = str2bool(materialInfo.materialRelease);
      materialInfo.materialReproduction = str2bool(
        materialInfo.materialReproduction
      );

      formData.Material.push(materialInfo);

      setMaterialInfo({
        materialTitle: "",
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
      materialTitle: "",
      materialURL: "",
      materialReproduction: false,
      materialRelease: false,
    });

    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, material) => {
    e.preventDefault();

    let filteredArray = formData.Material.filter((item) => item !== material);
    setFormData({ ...formData, Material: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Research Materials</h2>
        {formData.Material.map((material, index) => (
          <div className="output-type row" key={index}>
            <h4 className="output-title col">{material.materialTitle}</h4>
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
