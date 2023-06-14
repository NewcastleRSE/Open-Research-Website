// validation data
// each array contains the boolean values that are required to create an entry for each section
export default {
  Articles: ["embargo"],
  Codes: ["openSource", "release", "conf"],
  Datasets: ["format", "metaData", "fair", "release", "conf"],
  DigitalScholarships: ["embargo"],
  Materials: ["reproduction", "release"],
  Monographs: ["doi", "embargo"],
  PeerReviews: ["revResponse"],
  Preprints: ["release"],
  PreRegAnalyses: ["distinction"],
  Protocols: ["sharing"],
  RegisteredReports: ["funding", "peerRev", "changes"],
  Theses: ["format", "embargo"],
};
