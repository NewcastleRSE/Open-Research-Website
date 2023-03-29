import React, { useState } from "react";

import Protocol from "../forms/Protocol";
import validate from "../../validationRules/ProtocolVR";
import str2bool from "../../util/str2bool";

function Protocols({ formData, setFormData, display, setDisplay }) {
  const [errors, setErrors] = useState({});

  const [protocolInfo, setProtocolInfo] = useState({
    protocolTitle: "",
    protocolURL: "",
    protocolSharing: "",
  });

  const handleClick = (e) => {
    e.preventDefault();

    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(protocolInfo);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      protocolInfo.protocolSharing = str2bool(protocolInfo.protocolSharing);

      formData.Protocol.push(protocolInfo);

      setProtocolInfo({
        protocolTitle: "",
        protocolURL: "",
        protocolSharing: "",
      });

      setErrors({});
      setDisplay(!display);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setProtocolInfo({
      protocolTitle: "",
      protocolURL: "",
      protocolSharing: "",
    });

    setErrors({});
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
        {formData.Protocol.map((protocol) => (
          <div className="output-type row">
            <h4 className="output-title col">{protocol.protocolTitle}</h4>
            <span className="output-delete">
              <p onClick={(e) => handleDelete(e, protocol)}>Remove</p>
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

      <Protocol
        show={display}
        formData={protocolInfo}
        setFormData={setProtocolInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        errors={errors}
      />
    </div>
  );
}

export default Protocols;
