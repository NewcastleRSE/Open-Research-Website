import { useState } from "react";

export default function useFormData() {
  const [formData, setFormData] = useState({
    uuid: "",

    Researcher: {
      fullName: "Test 1",
      faculty: "SAgE",
      school: "School of Computing",
      otherSchool: "",
      careerStage: "PhD",
    },

    Project: {
      projectName: "Test 1",
      researchArea: "Test",
      funder: "UKRI",
      otherFunder: "",
      length: 2,
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
