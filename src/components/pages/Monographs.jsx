import { useState } from "react";
import MonographModal from "../formModals/MonographModal";
import validate from "../../validationRules/MonoVR";
import { v4 as uuidv4 } from "uuid";
import React from "react";

function Monographs({ formData, setFormData, display, setDisplay }) {
  const [errors, setErrors] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [currMonograph, setCurrMonograph] = useState({});

  const [monographInfo, setMonographInfo] = useState({
    monographTitle: "",
    monographURL: "",
    monographDOI: "",
    monographEmbargo: false,
    monographLicense: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    if (!editMode) {
      wipeMonographInfo();
    }
    setDisplay(!display);
  };

  const wipeMonographInfo = () => {
    setMonographInfo({
      monographTitle: "",
      monographURL: "",
      monographDOI: "",
      monographEmbargo: false,
      monographLicense: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(monographInfo);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // monographInfo.monographEmbargo = str2bool(monographInfo.monographEmbargo);
      if (!editMode) {
        setFormData({
          ...formData,
          Monograph: [
            ...formData.Monograph,
            { ...monographInfo, id: uuidv4() },
          ],
        });
      } else {
        const updatedMonographs = formData.Monograph.map((i) =>
          i.id === currMonograph.id ? monographInfo : i
        );
        const updatedFormData = {
          ...formData,
          Monograph: updatedMonographs,
        };
        setFormData(updatedFormData);
      }

      wipeMonographInfo();
      setErrors({});
      setDisplay(!display);
      setEditMode(false);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    wipeMonographInfo();
    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, monograph) => {
    e.preventDefault();

    let filteredArray = formData.Monograph.filter((item) => item !== monograph);
    setFormData({ ...formData, Monograph: filteredArray });
  };

  const handleEdit = (e, monograph) => {
    e.preventDefault();

    setCurrMonograph(monograph);

    setMonographInfo({
      ...monograph,
    });

    setEditMode(true);
    setDisplay(!display);
  };

  return (
    <div>
      <div>
        <h2>Monographs</h2>
        {formData.Monograph.map((monograph, index) => (
          <div className="output-type row" key={index}>
            <h4 className="output-title col">{monograph.monographTitle}</h4>
            <span
              className="output-edit"
              style={{ cursor: "pointer", marginRight: "1rem" }}
            >
              <p onClick={(e) => handleEdit(e, monograph)}>Edit</p>
            </span>
            <span className="output-delete">
              <p onClick={(e) => handleDelete(e, monograph)}>Remove</p>
            </span>
          </div>
        ))}
        <button
          type="button"
          className="forward"
          onClick={(e) => handleClick(e)}
        >
          Add Monograph
        </button>
      </div>

      <MonographModal
        show={display}
        formData={monographInfo}
        setFormData={setMonographInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        errors={errors}
      />
    </div>
  );
}

export default Monographs;
