import React from "react";

import Checkbox from "../formElements/Checkbox";

const displayDissertation = ({ formBuilder, setFormBuilder, formData }) => {
  if (formData.Researcher.careerStage === "PhD") {
    return (
      <div className="col">
        <Checkbox
          name="Theses and Dissertation"
          checked={formBuilder.dissertation}
          onChange={(event) => {
            setFormBuilder({
              ...formBuilder,
              dissertation: event.target.checked,
            });
          }}
        />
      </div>
    );
  } else {
    return null;
  }
};

function FormBuilder({ formBuilder, setFormBuilder, formData, error }) {
  return (
    <div className="step">
      <h2>Output Types</h2>
      <h3 className="main_question">
        Please select the output types you have used in your project
      </h3>
      <p className="red-text">{error.builder}</p>
      <div className="row">
        <div className="col">
          <Checkbox
            name="Articles"
            checked={formBuilder.article}
            onChange={(event) => {
              setFormBuilder({ ...formBuilder, article: event.target.checked });
            }}
          />
        </div>
        <div className="col">
          <Checkbox
            name="Monographs"
            checked={formBuilder.monograph}
            onChange={(event) => {
              setFormBuilder({
                ...formBuilder,
                monograph: event.target.checked,
              });
            }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Checkbox
            name="Dataset"
            checked={formBuilder.dataset}
            onChange={(event) => {
              setFormBuilder({ ...formBuilder, dataset: event.target.checked });
            }}
          />
        </div>
        <div className="col">
          <Checkbox
            name="Code and Software"
            checked={formBuilder.code}
            onChange={(event) => {
              setFormBuilder({ ...formBuilder, code: event.target.checked });
            }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Checkbox
            name="Research Material"
            checked={formBuilder.researchMaterial}
            onChange={(event) => {
              setFormBuilder({
                ...formBuilder,
                researchMaterial: event.target.checked,
              });
            }}
          />
        </div>
        <div className="col">
          <Checkbox
            name="Protocols"
            checked={formBuilder.protocol}
            onChange={(event) => {
              setFormBuilder({
                ...formBuilder,
                protocol: event.target.checked,
              });
            }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Checkbox
            name="Digital Scholarship"
            checked={formBuilder.digitalScholarship}
            onChange={(event) => {
              setFormBuilder({
                ...formBuilder,
                digitalScholarship: event.target.checked,
              });
            }}
          />
        </div>
        <div className="col">
          <Checkbox
            name="Preprints"
            checked={formBuilder.preprints}
            onChange={(event) => {
              setFormBuilder({
                ...formBuilder,
                preprints: event.target.checked,
              });
            }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Checkbox
            name="Open Peer Reviews"
            checked={formBuilder.openPeerReview}
            onChange={(event) => {
              setFormBuilder({
                ...formBuilder,
                openPeerReview: event.target.checked,
              });
            }}
          />
        </div>
        <div className="col">
          <Checkbox
            name="Pre-registration Analysis Plans"
            checked={formBuilder.analysisPlan}
            onChange={(event) => {
              setFormBuilder({
                ...formBuilder,
                analysisPlan: event.target.checked,
              });
            }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Checkbox
            name="Registered Reports"
            checked={formBuilder.registeredReport}
            onChange={(event) => {
              setFormBuilder({
                ...formBuilder,
                registeredReport: event.target.checked,
              });
            }}
          />
        </div>
        {/*{displayDissertation({ formBuilder, setFormBuilder, formData })}*/}
      </div>
    </div>
  );
}

export default FormBuilder;
