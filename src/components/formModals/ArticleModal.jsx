import React, { useState } from "react";
import Article from "../forms/Article";
import ArticleHelp from "../formHelp/ArticleHelp";
import Toggle from "../formElements/Toggle";

const ArticleModal = ({
  show,
  setDisplay,
  formData,
  setFormData,
  handleCancel,
  handleSubmit,
  handleSave,
  errors,
}) => {
  const [showForm, setShowForm] = useState(true);

  const toggleShowForm = (e) => {
    e.preventDefault();
    setShowForm((prev) => !prev);
  };

  return (
    <div>
      {show && (
        <div className="modal-container" onClick={() => setDisplay(!show)}>
          <div
            className="step modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="form-header">
              <h1>{showForm ? "Article" : "Additional Information"}</h1>
              <Toggle
                onClick={toggleShowForm}
                text={showForm ? "More Info" : "Show Form"}
              />
            </div>
            {showForm ? (
              <Article
                formData={formData}
                setFormData={setFormData}
                handleCancel={handleCancel}
                handleSave={handleSave}
                handleSubmit={handleSubmit}
                errors={errors}
              />
            ) : (
              <ArticleHelp />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleModal;
