import React, { useState } from "react";

import PeerReview from "../forms/PeerReview";
import validate from "../../validationRules/PeerReviewVR";

function PeerReviews({ formData, setFormData }) {
  const [display, setDisplay] = useState(false);

  const [errors, setErrors] = useState({});

  const [peerRevInfo, setPeerRevInfo] = useState({
    peerRevURL: "",
    peerRevResponse: false,
  });

  const handleClick = (e) => {
    e.preventDefault();

    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(peerRevInfo);
    setErrors(newErrors);

    if (!newErrors.URL && !newErrors.peerRevResponse) {
      formData.peerRevs.push(peerRevInfo);

      setPeerRevInfo({
        peerRevURL: "",
        peerRevResponse: false,
      });

      setErrors({});
      setDisplay(!display);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setPeerRevInfo({
      peerRevURL: "",
      peerRevResponse: false,
    });

    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, peerRev) => {
    e.preventDefault();

    let filteredArray = formData.peerRevs.filter((item) => item !== peerRev);
    setFormData({ ...formData, peerRevs: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Open Peer Reviews</h2>
        {formData.peerRevs.map((peerRev) => (
          <div className="output-type row">
            <h4 className="output-title col">{peerRev.peerRevURL}</h4>
            <span className="output-delete">
              <p onClick={(e) => handleDelete(e, peerRev)}>Remove</p>
            </span>
          </div>
        ))}
        <button
          type="button"
          className="forward"
          onClick={(e) => handleClick(e)}
        >
          Add Peer Review
        </button>
      </div>

      <PeerReview
        show={display}
        formData={peerRevInfo}
        setFormData={setPeerRevInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        errors={errors}
      />
    </div>
  );
}

export default PeerReviews;
