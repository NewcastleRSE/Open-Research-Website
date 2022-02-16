import React from "react";

import TextInput from "../formElements/TextInput";
import DropDownOther from "../formElements/DropDownOther";
import NumberInput from "../formElements/NumberInput";

function ProjectInfo({ formData, setFormData }) {
  return (
    <div className="step">
      <h2>Project</h2>
      <h3 className="main_question">
        Please fill with your details about your project
      </h3>
      <TextInput
        name="projectArea"
        placeholder="Research Area"
        value={formData.researchArea}
        onChange={(event) =>
          setFormData({ ...formData, researchArea: event.target.value })
        }
      />
      <TextInput
        name="projectName"
        placeholder="Project Name"
        value={formData.projectName}
        onChange={(event) =>
          setFormData({ ...formData, projectName: event.target.value })
        }
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
      />
      <div className="row">
        <NumberInput
          name="length"
          placeholder="Length(M)"
          value={formData.length}
          onChange={(event) =>
            setFormData({ ...formData, length: event.target.value })
          }
        />
      </div>
    </div>
  );
}

export default ProjectInfo;
