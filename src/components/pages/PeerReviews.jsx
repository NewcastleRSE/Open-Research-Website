import { useState } from "react";
import { PeerReviewModal } from "../formModals/Modals";
import validate from "../../validationRules/Validation";

import { v4 as uuidv4 } from "uuid";
import React from "react";

function PeerReviews({ formData, setFormData, display, setDisplay }) {
  const [errors, setErrors] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [currPeerRev, setCurrPeerRev] = useState({});

  const [peerRevInfo, setPeerRevInfo] = useState({
    title: "",
    url: "",
    revResponse: false,
    complete: true,
    selected: true,
  });

  const handleClick = (e) => {
    e.preventDefault();
    if (!editMode) {
      wipePeerRevInfo();
    }
    setDisplay(!display);
  };

  const wipePeerRevInfo = () => {
    setPeerRevInfo({
      title: "",
      url: "",
      revResponse: false,
      complete: true,
      selected: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(peerRevInfo);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // peerRevInfo.peerRevResponse = str2bool(peerRevInfo.peerRevResponse);

      if (!editMode) {
        setFormData({
          ...formData,
          PeerRev: [...formData.PeerRev, { ...peerRevInfo, id: uuidv4() }],
        });
      } else {
        const updatedPeerReviews = formData.PeerRev.map((i) =>
          i.id === currPeerRev.id ? peerRevInfo : i
        );
        const updatedFormData = {
          ...formData,
          PeerRev: updatedPeerReviews,
        };
        setFormData(updatedFormData);
      }

      wipePeerRevInfo();
      setErrors({});
      setDisplay(!display);
      setEditMode(false);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    wipePeerRevInfo();
    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, peerRev) => {
    e.preventDefault();

    let filteredArray = formData.PeerRev.filter((item) => item !== peerRev);
    setFormData({ ...formData, PeerRev: filteredArray });
  };

  const handleEdit = (e, peerRev) => {
    e.preventDefault();

    setCurrPeerRev(peerRev);

    setPeerRevInfo({
      ...peerRev,
    });

    setEditMode(true);
    setDisplay(!display);
  };

  return (
    <div>
      <div>
        <h2>Open Peer Reviews</h2>
        {formData.PeerRev.map((peerRev, index) => (
          <div className="output-type row" key={index}>
            <h4 className="output-title col">{peerRev.peerRevTitle}</h4>
            <span
              className="output-edit"
              style={{ cursor: "pointer", marginRight: "1rem" }}
            >
              {peerRev.selected ? (
                <p onClick={(e) => handleToggleEntry(e, peerRev)}>Deselect</p>
              ) : (
                <p onClick={(e) => handleToggleEntry(e, peerRev)}>Select</p>
              )}
            </span>
            <span
              className="output-edit"
              style={{ cursor: "pointer", marginRight: "1rem" }}
            >
              <p onClick={(e) => handleEdit(e, peerRev)}>Edit</p>
            </span>
            <span className="output-delete">
              {!peerRev.orcid && (
                <p onClick={(e) => handleDelete(e, peerRev)}>Delete</p>
              )}
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

      <PeerReviewModal
        show={display}
        formData={peerRevInfo}
        setFormData={setPeerRevInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        handleSave={handleSave}
        errors={errors}
      />
    </div>
  );
}

export default PeerReviews;
