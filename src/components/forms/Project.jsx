import React from "react";

import TextInput from "../formElements/TextInput";
import DropDownOther from "../formElements/DropDownOther";
import NumberInput from "../formElements/NumberInput";
import ModalButtons from "../formElements/ModalButtons";

const Project = ({
  show,
  formData,
  setFormData,
  setDisplay,
  handleCancel,
  handleSubmit,
  errors,
}) => {
  if (show) {
    return (
      <div className="modal-container" onClick={() => setDisplay(!show)}>
        <div
          className="step modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="main_question">
            Please fill with your details about your project
          </h3>
          <TextInput
            name="projectName"
            placeholder="Project Name"
            value={formData.projectName}
            onChange={(event) =>
              setFormData({ ...formData, projectName: event.target.value })
            }
            error={errors.projectName}
          />
          <TextInput
            name="researchArea"
            placeholder="Research Area"
            value={formData.researchArea}
            onChange={(event) =>
              setFormData({ ...formData, researchArea: event.target.value })
            }
            error={errors.researchArea}
          />
          <DropDownOther
            name="funder"
            placeholder="Funder"
            options={[{ value: "EPSRC" }, { value: "UKRI" }, { value: "AHRC" }]}
            value={formData.funder}
            onChange={(event) => {
              setFormData({ ...formData, funder: event.target.value });
            }}
            otherValue={formData.otherFunder}
            otherOnChange={(event) => {
              setFormData({ ...formData, otherFunder: event.target.value });
            }}
            error={errors.funder}
            otherError={errors.otherFunder}
          />
          <div className="row">
            <NumberInput
              name="length"
              placeholder="Length(M)"
              value={formData.length}
              onChange={(event) =>
                setFormData({ ...formData, length: event.target.value })
              }
              error={errors.length}
            />
          </div>
          <ModalButtons
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Project;
