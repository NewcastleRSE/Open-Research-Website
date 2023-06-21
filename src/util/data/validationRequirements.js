// validation data
// each array contains the boolean values that are required to create an entry for each section
export default {
  Articles: ["doi", "license", "embargo"],
  Codes: ["doi", "openSource", "release", "conf"],
  Datasets: ["doi", "license", "format", "metaData", "fair", "release", "conf"],
  DigitalScholarships: ["license", "embargo"],
  Materials: ["reproduction", "release"],
  Monographs: ["doi", "license", "embargo"],
  PeerReviews: ["response"],
  Preprints: ["doi", "license", "release"],
  PreRegAnalyses: ["distinction"],
  Protocols: ["sharing"],
  RegisteredReports: ["funding", "peerRev", "changes"],
  Theses: ["doi", "license", "format", "embargo"],
};
