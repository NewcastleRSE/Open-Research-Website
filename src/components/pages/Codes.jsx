import { useState } from "react";
import { CodeModal } from "../formModals/Modals";
import validate from "../../validationRules/Validation";
import { v4 as uuidv4 } from "uuid";
import React from "react";

function Codes({ formData, setFormData, display, setDisplay }) {
  const [errors, setErrors] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [currCode, setCurrCode] = useState({});

  const [codeInfo, setCodeInfo] = useState({
    title: "",
    url: "",
    doi: "",
    openSource: false,
    license: "",
    release: "",
    conf: "",
    selected: true,
    complete: true,
  });

  const handleClick = (e) => {
    e.preventDefault();
    if (!editMode) {
      wipeCodeInfo();
    }
    setDisplay(!display);
  };

  const wipeCodeInfo = () => {
    setCodeInfo({
      title: "",
      url: "",
      doi: "",
      openSource: false,
      license: "",
      release: "",
      conf: "",
      selected: true,
      completed: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(codeInfo);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // codeInfo.openSource = str2bool(codeInfo.openSource);
      // codeInfo.codeRelease = str2bool(codeInfo.codeRelease);
      // codeInfo.codeConf = str2bool(codeInfo.codeConf);
      if (!editMode) {
        setFormData({
          ...formData,
          Code: [...formData.Code, { ...codeInfo, id: uuidv4() }],
        });
      } else {
        const updatedCodes = formData.Code.map((i) =>
          i.id === currCode.id ? codeInfo : i
        );
        const updatedFormData = {
          ...formData,
          Code: updatedCodes,
        };
        setFormData(updatedFormData);
      }

      wipeCodeInfo();
      setErrors({});
      setDisplay(!display);
      setEditMode(false);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let newErrors = validate(codeInfo);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      codeInfo.complete = true;
      codeInfo.selected = true;
      const updatedCode = formData.Code.map((i) =>
        i.id === codeInfo.id ? codeInfo : i
      );
      const updatedFormData = {
        ...formData,
        Code: updatedCode,
      };
      setFormData(updatedFormData);
      console.log(formData);

      wipeCodeInfo();
      setErrors({});
      setDisplay(!display);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    wipeCodeInfo();
    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, code) => {
    e.preventDefault();
    let filteredArray = formData.Code.filter((item) => item !== code);
    setFormData({ ...formData, Code: filteredArray });
  };

  const handleEdit = (e, code) => {
    e.preventDefault();

    setCurrCode(code);

    setCodeInfo({
      ...code,
    });

    setEditMode(true);
    setDisplay(!display);
  };

  const handleToggleEntry = (e, code) => {
    e.preventDefault();
    setCodeInfo(code);
    setCurrCode(code);
    if (code.complete) {
      const updatedCode = formData.Code.map((i) =>
        i.id === code.id ? { ...i, selected: !i.selected, complete: true } : i
      );
      const updatedFormData = {
        ...formData,
        Code: updatedCode,
      };
      setFormData(updatedFormData);
    } else {
      setErrors({});
      setDisplay(!display);
    }
  };

  return (
    <div>
      <div>
        <h2>Code</h2>
        {formData.Code.map((code, index) => (
          <div className="output-type row" key={index}>
            <h4 className="output-title col">{code.title}</h4>
            {/* <h4 className="output-title col">{code.type}</h4> */}
            <span
              className="output-edit"
              style={{ cursor: "pointer", marginRight: "1rem" }}
            >
              {code.selected ? (
                <p onClick={(e) => handleToggleEntry(e, code)}>Deselect</p>
              ) : (
                <p onClick={(e) => handleToggleEntry(e, code)}>Select</p>
              )}
            </span>
            <span
              className="output-edit"
              style={{ cursor: "pointer", marginRight: "1rem" }}
            >
              <p onClick={(e) => handleEdit(e, code)}>Edit</p>
            </span>
            <span className="output-delete">
              {!code.orcid && (
                <p onClick={(e) => handleDelete(e, code)}>Delete</p>
              )}
            </span>
          </div>
        ))}
        <button
          type="button"
          className="forward"
          onClick={(e) => handleClick(e)}
        >
          Add Code
        </button>
      </div>

      <CodeModal
        show={display}
        formData={codeInfo}
        setFormData={setCodeInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        handleSave={handleSave}
        handleCancel={handleCancel}
        errors={errors}
      />
    </div>
  );
}

export default Codes;
