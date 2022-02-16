import React, { useState } from "react";

import Protocol from "../forms/Protocol";

function Protocols({ formData, setFormData }) {
  const [display, setDisplay] = useState(false);

  const [protocolInfo, setProtocolInfo] = useState({
    protocolURL: "",
    protocolSharing: "",
  });

  const handleClick = (e) => {
    e.preventDefault();

    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    formData.protocols.push(protocolInfo);

    setProtocolInfo({
      protocolURL: "",
      protocolSharing: "",
    });

    setDisplay(!display);
  };

  const handleDelete = (e, protocol) => {
    e.preventDefault();

    let filteredArray = formData.protocols.filter((item) => item !== protocol);
    setFormData({ ...formData, protocols: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Protocols</h2>
        {formData.protocols.map((protocol) => (
          <div className="output-type row">
            <h4 className="output-title col">{protocol.protocolURL}</h4>
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
      />
    </div>
  );
}

export default Protocols;
