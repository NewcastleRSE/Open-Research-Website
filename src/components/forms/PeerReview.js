import React from "react";

import UrlInput from "../formElements/UrlInput";
import BooleanInput from "../formElements/BooleanInput";
import ModalButtons from "../formElements/ModalButtons";

function PeerReview({ show, formData, setFormData, setDisplay, handleSubmit }) {
  if (show) {
    return (
      <div className="modal-container" onClick={() => setDisplay(!show)}>
        <div
          className="step modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Open Peer Review</h2>
          <h3 className="main_question">
            Please fill with details about your open peer review
          </h3>
          <UrlInput
            name="peerRevURL"
            placeholder="Peer Review URL"
            value={formData.peerRevURL}
            onChange={(event) => {
              setFormData({ ...formData, peerRevURL: event.target.value });
            }}
          />
          <BooleanInput
            name="peerRevResponse"
            label="Does the peer review include the authors response?"
            a="Yes"
            b="No"
            value={formData.peerRevResponse}
            onChange={(event) => {
              setFormData({ ...formData, peerRevResponse: event.target.value });
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

export default PeerReview;
