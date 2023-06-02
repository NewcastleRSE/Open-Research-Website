import React from "react";

import TextInput from "../formElements/TextInput";
import DropDownOther from "../formElements/DropDownOther";
import NumberInput from "../formElements/NumberInput";
import ModalButtons from "../formElements/ModalButtons";

const Project = ({
  formData,
  setFormData,
  handleCancel,
  handleSubmit,
  errors,
}) => {
  return (
    <>
      <h3 className="main_question">
        Please fill with your details about your project
      </h3>
      <TextInput
        name="projectName"
        placeholder="Title"
        value={formData.title}
        onChange={(event) =>
          setFormData({ ...formData, title: event.target.value })
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
      <TextInput
        name="funder"
        placeholder="Funder"
        value={formData.funder}
        onChange={(event) => {
          setFormData({ ...formData, funder: event.target.value });
        }}
        error={errors.funder}
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
      <ModalButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />
    </>
  );
};

export default Project;
