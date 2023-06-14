import { useState } from "react";
import { ProtocolModal } from "../formModals/Modals";
import validate from "../../validationRules/Validation";

import { v4 as uuidv4 } from "uuid";
import React from "react";

function Protocols({ formData, setFormData, display, setDisplay }) {
  const [errors, setErrors] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [currProtocol, setCurrProtocol] = useState({});
  const [protocolInfo, setProtocolInfo] = useState({
    title: "",
    url: "",
    sharing: "",
    complete: true,
    selected: true,
  });

  const wipeInfo = () => {
    setProtocolInfo({
      title: "",
      url: "",
      sharing: "",
      complete: true,
      selected: true,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!editMode) {
      wipeInfo();
    }
    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(protocolInfo);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // protocolInfo.protocolSharing = str2bool(protocolInfo.protocolSharing);
      if (!editMode) {
        setFormData({
          ...formData,
          Protocol: [...formData.Protocol, { ...protocolInfo, id: uuidv4() }],
        });
      } else {
        const updatedProtocol = formData.Protocol.map((i) =>
          JSON.stringify(i) === JSON.stringify(currProtocol) ? protocolInfo : i
        );
        const updatedFormData = {
          ...formData,
          Protocol: updatedProtocol,
        };
        setFormData(updatedFormData);
      }

      wipeInfo();
      setErrors({});
      setDisplay(!display);
      setEditMode(false);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    wipeInfo();
    setErrors({});
    setDisplay(!display);
  };

  const handleEdit = (e, protocol) => {
    e.preventDefault();

    setCurrProtocol(protocol);

    setProtocolInfo({
      ...protocol,
    });

    setEditMode(true);
    setDisplay(!display);
  };

  const handleDelete = (e, protocol) => {
    e.preventDefault();

    let filteredArray = formData.Protocol.filter((item) => item !== protocol);
    setFormData({ ...formData, Protocol: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Protocols</h2>
        {formData.Protocol.map((protocol, index) => (
          <div className="output-type row" key={index}>
            <h4 className="output-title col">{protocol.protocolTitle}</h4>
            <span
              className="output-edit"
              style={{ cursor: "pointer", marginRight: "1rem" }}
            >
              {protocol.selected ? (
                <p onClick={(e) => handleToggleEntry(e, protocol)}>Deselect</p>
              ) : (
                <p onClick={(e) => handleToggleEntry(e, protocol)}>Select</p>
              )}
            </span>
            <span
              className="output-edit"
              style={{ cursor: "pointer", marginRight: "1rem" }}
            >
              <p onClick={(e) => handleEdit(e, protocol)}>Edit</p>
            </span>
            <span className="output-delete">
              {!protocol.orcid && (
                <p onClick={(e) => handleDelete(e, protocol)}>Delete</p>
              )}
            </span>
          </div>
        ))}
        <button
          type="button"
          className="forward"
          onClick={(e) => handleClick(e)}
        >
          Add Protocol
        </button>
      </div>

      <ProtocolModal
        show={display}
        formData={protocolInfo}
        setFormData={setProtocolInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        handleSave={handleSave}
        errors={errors}
      />
    </div>
  );
}

export default Protocols;
