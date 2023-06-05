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
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={(event) =>
          setFormData({ ...formData, title: event.target.value })
        }
        error={errors.title}
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
      <TextInput
        name="type"
        placeholder="Type of Funding"
        value={formData.type}
        onChange={(event) => {
          setFormData({ ...formData, type: event.target.value });
        }}
        error={errors.type}
      />
      <TextInput
        name="url"
        placeholder="Link"
        value={formData.url}
        onChange={(event) => {
          setFormData({ ...formData, url: event.target.value });
        }}
        error={errors.URL}
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
