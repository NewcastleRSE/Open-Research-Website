import { useState } from "react";
import { ThesisModal } from "../formModals/Modals";
import validate from "../../validationRules/Validation";
import { v4 as uuidv4 } from "uuid";
import React from "react";

function Theses({ formData, setFormData, display, setDisplay }) {
  const [errors, setErrors] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [currThesis, setCurrThesis] = useState({});

  const [thesesInfo, setThesesInfo] = useState({
    title: "",
    url: "",
    doi: "",
    embargo: false,
    license: "",
    complete: true,
    selected: true,
  });

  const handleClick = (e) => {
    e.preventDefault();
    if (!editMode) {
      wipeThesesInfo();
    }
    setDisplay(!display);
  };

  const wipeThesesInfo = () => {
    setThesesInfo({
      title: "",
      url: "",
      doi: "",
      embargo: false,
      license: "",
      complete: true,
      selected: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(thesesInfo);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // thesesInfo.thesisEmbargo = str2bool(thesesInfo.thesisEmbargo);

      if (!editMode) {
        setFormData({
          ...formData,
          Thesis: [...formData.Thesis, { ...thesesInfo, id: uuidv4() }],
        });
      } else {
        const updatedTheses = formData.Thesis.map((i) =>
          i.id === currThesis.id ? thesesInfo : i
        );
        const updatedFormData = {
          ...formData,
          Thesis: updatedTheses,
        };
        setFormData(updatedFormData);
      }

      wipeThesesInfo();
      setErrors({});
      setDisplay(!display);
      setEditMode(false);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    wipeThesesInfo();
    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, theses) => {
    e.preventDefault();

    let filteredArray = formData.Thesis.filter((item) => item !== theses);
    setFormData({ ...formData, Thesis: filteredArray });
  };

  const handleEdit = (e, theses) => {
    e.preventDefault();

    setCurrThesis(theses);

    setThesesInfo({
      ...theses,
    });

    setEditMode(true);
    setDisplay(!display);
  };

  return (
    <div>
      <div>
        <h2>Theses and Dissertation</h2>
        {formData.Thesis.map((theses, index) => (
          <div className="output-type row" key={index}>
            <h4 className="output-title col">{theses.thesisTitle}</h4>
            <span
              className="output-edit"
              style={{ cursor: "pointer", marginRight: "1rem" }}
            >
              {theses.selected ? (
                <p onClick={(e) => handleToggleEntry(e, theses)}>Deselect</p>
              ) : (
                <p onClick={(e) => handleToggleEntry(e, theses)}>Select</p>
              )}
            </span>
            <span
              className="output-edit"
              style={{ cursor: "pointer", marginRight: "1rem" }}
            >
              <p onClick={(e) => handleEdit(e, theses)}>Edit</p>
            </span>
            <span className="output-delete">
              {!theses.orcid && (
                <p onClick={(e) => handleDelete(e, theses)}>Delete</p>
              )}
            </span>
          </div>
        ))}
        <button
          type="button"
          className="forward"
          onClick={(e) => handleClick(e)}
        >
          Add Theses or Dissertation
        </button>
      </div>

      <ThesisModal
        show={display}
        formData={thesesInfo}
        setFormData={setThesesInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        handleSave={handleSave}
        errors={errors}
      />
    </div>
  );
}

export default Theses;
