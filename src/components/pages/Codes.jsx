import { useState } from "react";
import CodeModal from "../formModals/CodeModal";
import validate from "../../validationRules/CodeVR";
import { v4 as uuidv4 } from "uuid";
import React from "react";

function Codes({ formData, setFormData, display, setDisplay }) {
  const [errors, setErrors] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [currCode, setCurrCode] = useState({});

  const [codeInfo, setCodeInfo] = useState({
    codeTitle: "",
    codeURL: "",
    codeDOI: "",
    openSource: false,
    codeLicense: "",
    codeRelease: "",
    codeConf: "",
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
      codeTitle: "",
      codeURL: "",
      codeDOI: "",
      openSource: false,
      codeLicense: "",
      codeRelease: "",
      codeConf: "",
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

  return (
    <div>
      <div>
        <h2>Code</h2>
        {formData.Code.map((code, index) => (
          <div className="output-type row" key={index}>
            <h4 className="output-title col">{code.codeTitle}</h4>
            <span
              className="output-edit"
              style={{ cursor: "pointer", marginRight: "1rem" }}
            >
              <p onClick={(e) => handleEdit(e, code)}>Edit</p>
            </span>
            <span className="output-delete">
              <p onClick={(e) => handleDelete(e, code)}>Remove</p>
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
        handleCancel={handleCancel}
        errors={errors}
      />
    </div>
  );
}

export default Codes;