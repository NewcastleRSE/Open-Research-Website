import React, { useState } from "react";

export default function useFormData() {
  const [formData, setFormData] = useState({
    uuid: "",

    Researcher: {
      fullName: "",
      faculty: "",
      school: "",
      otherSchool: "",
      careerStage: "",
    },

    Project: {
      projectName: "",
      researchArea: "",
      funder: "",
      otherFunder: "",
      length: 0,
    },

    Article: [],
    Monograph: [],
    Dataset: [],
    Code: [],
    Material: [],
    Protocol: [],
    DigitalScholarship: [],
    Preprint: [],
    PeerRev: [],
    PreRegAnalysis: [],
    RegReport: [],
    Thesis: [],
  });

  return { formData, setFormData };
}
