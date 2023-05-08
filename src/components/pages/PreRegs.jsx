import { useState } from "react";
import PreRegModal from "../formModals/PreRegModal";
import validate from "../../validationRules/PreRegVR";
import { v4 as uuidv4 } from "uuid";
import React from "react";

function PreRegs({ formData, setFormData, display, setDisplay }) {
  const [errors, setErrors] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [currPreReg, setCurrPreReg] = useState({});

  const [preRegInfo, setPreRegInfo] = useState({
    preRegTitle: "",
    preRegURL: "",
    preRegDistinction: false,
  });

  const handleClick = (e) => {
    e.preventDefault();
    if (!editMode) {
      wipePreRegInfo();
    }
    setDisplay(!display);
  };

  const wipePreRegInfo = () => {
    setPreRegInfo({
      preRegTitle: "",
      preRegURL: "",
      preRegDistinction: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(preRegInfo);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // preRegInfo.preRegDistinction = str2bool(preRegInfo.preRegDistinction);

      if (!editMode) {
        setFormData({
          ...formData,
          PreRegAnalysis: [
            ...formData.PreRegAnalysis,
            { ...preRegInfo, id: uuidv4() },
          ],
        });
      } else {
        const updatedPreRegs = formData.PreRegAnalysis.map((i) =>
          i.id === currPreReg.id ? preRegInfo : i
        );
        const updatedFormData = {
          ...formData,
          PreRegAnalysis: updatedPreRegs,
        };
        setFormData(updatedFormData);
      }

      wipePreRegInfo();
      setErrors({});
      setDisplay(!display);
      setEditMode(false);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    wipePreRegInfo();
    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, preReg) => {
    e.preventDefault();

    let filteredArray = formData.PreRegAnalysis.filter(
      (item) => item !== preReg
    );
    setFormData({ ...formData, PreRegAnalysis: filteredArray });
  };

  const handleEdit = (e, preReg) => {
    e.preventDefault();

    setCurrPreReg(preReg);

    setPreRegInfo({
      ...preReg,
    });

    setEditMode(true);
    setDisplay(!display);
  };

  return (
    <div>
      <div>
        <h2>Pre-registration Analysis Plans</h2>
        {formData.PreRegAnalysis.map((preReg, index) => (
          <div className="output-type row" key={index}>
            <h4 className="output-title col">{preReg.preRegTitle}</h4>
            <span
              className="output-edit"
              style={{ cursor: "pointer", marginRight: "1rem" }}
            >
              <p onClick={(e) => handleEdit(e, preReg)}>Edit</p>
            </span>
            <span className="output-delete">
              <p onClick={(e) => handleDelete(e, preReg)}>Remove</p>
            </span>
          </div>
        ))}
        <button
          type="button"
          className="forward"
          onClick={(e) => handleClick(e)}
        >
          Add Pre-registration Analysis Plan
        </button>
      </div>

      <PreRegModal
        show={display}
        formData={preRegInfo}
        setFormData={setPreRegInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        errors={errors}
      />
    </div>
  );
}

export default PreRegs;
