import { useState } from "react";
import { PreprintModal } from "../formModals/Modals";
import validate from "../../validationRules/Validation";

import { v4 as uuidv4 } from "uuid";
import React from "react";

function Preprints({ formData, setFormData, display, setDisplay }) {
  const [errors, setErrors] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [currPreprint, setCurrPreprint] = useState({});

  const [preprintInfo, setPreprintInfo] = useState({
    title: "",
    url: "",
    doi: "",
    license: "",
    release: false,
    complete: true,
    selected: true,
  });

  const handleClick = (e) => {
    e.preventDefault();
    if (!editMode) {
      wipePreprintInfo();
    }
    setDisplay(!display);
  };

  const wipePreprintInfo = () => {
    setPreprintInfo({
      title: "",
      url: "",
      doi: "",
      license: "",
      release: false,
      complete: true,
      selected: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(preprintInfo);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // preprintInfo.preprintRelease = str2bool(preprintInfo.preprintRelease);

      if (!editMode) {
        setFormData({
          ...formData,
          Preprint: [...formData.Preprint, { ...preprintInfo, id: uuidv4() }],
        });
      } else {
        const updatedPreprints = formData.Preprint.map((i) =>
          i.id === currPreprint.id ? preprintInfo : i
        );
        const updatedFormData = {
          ...formData,
          Preprint: updatedPreprints,
        };
        setFormData(updatedFormData);
      }

      wipePreprintInfo();
      setErrors({});
      setDisplay(!display);
      editMode(false);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    wipePreprintInfo();
    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, preprint) => {
    e.preventDefault();

    let filteredArray = formData.Preprint.filter((item) => item !== preprint);
    setFormData({ ...formData, Preprint: filteredArray });
  };

  const handleEdit = (e, preprint) => {
    e.preventDefault();

    setCurrPreprint(preprint);

    setPreprintInfo({
      ...preprint,
    });

    setEditMode(true);
    setDisplay(!display);
  };

  return (
    <div>
      <div>
        <h2>Preprints</h2>
        {formData.Preprint.map((preprint, index) => (
          <div className="output-type row" key={index}>
            <h4 className="output-title col">{preprint.preprintTitle}</h4>
            <span
              className="output-edit"
              style={{ cursor: "pointer", marginRight: "1rem" }}
            >
              {preprint.selected ? (
                <p onClick={(e) => handleToggleEntry(e, preprint)}>Deselect</p>
              ) : (
                <p onClick={(e) => handleToggleEntry(e, preprint)}>Select</p>
              )}
            </span>
            <span
              className="output-edit"
              style={{ cursor: "pointer", marginRight: "1rem" }}
            >
              <p onClick={(e) => handleEdit(e, preprint)}>Edit</p>
            </span>
            <span className="output-delete">
              {!preprint.orcid && (
                <p onClick={(e) => handleDelete(e, preprint)}>Delete</p>
              )}
            </span>
          </div>
        ))}
        <button
          type="button"
          className="forward"
          onClick={(e) => handleClick(e)}
        >
          Add Preprint
        </button>
      </div>

      <PreprintModal
        show={display}
        formData={preprintInfo}
        setFormData={setPreprintInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        handleSave={handleSave}
        errors={errors}
      />
    </div>
  );
}

export default Preprints;
