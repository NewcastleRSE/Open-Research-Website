import React from "react";

import TextInput from "../formElements/TextInput";
import BooleanInput from "../formElements/BooleanInput";
import ModalButtons from "../formElements/ModalButtons";

function Protocol({ show, formData, setFormData, setDisplay, handleSubmit }) {
  if (show) {
    return (
      <div className="modal-container" onClick={() => setDisplay(!show)}>
        <div
          className="step modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Protocols</h2>
          <h3 className="main_question">
            Please fill with details about your protocol
          </h3>
          <TextInput
            name="protocolURL"
            placeholder="Protocol URL"
            value={formData.protocolURL}
            onChange={(event) => {
              setFormData({ ...formData, protocolURL: event.target.value });
            }}
          />
          <BooleanInput
            name="protocolSharing"
            label="Does it facilitate sharing, editing, forking, and further development?"
            a="Yes"
            b="No"
            value={formData.protocolSharing}
            onChange={(event) => {
              setFormData({ ...formData, protocolSharing: event.target.value });
            }}
          />
          <ModalButtons setDisplay={setDisplay} handleSubmit={handleSubmit} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Protocol;
