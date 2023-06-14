import manageDataDisplay from "../hoc/manageDataDisplay";

// Article
const DisplayArticleInfo = manageDataDisplay([
  { label: "Title", prop: "title" },
  { label: "URL", prop: "url" },
  { label: "DOI", prop: "doi" },
  { label: "Type", prop: "type" },
  { label: "Embargo", prop: "embargo" },
  { label: "License", prop: "license" },
]);
// Code
const DisplayCodeInfo = manageDataDisplay([
  "Title",
  "URL",
  "DOI",
  "Type",
  "Open Source",
]);
// Dataset
const DisplayDatasetInfo = manageDataDisplay([
  "Title",
  "URL",
  "DOI",
  "Type",
  "Format",
  "License",
]);
// Digital Scholarship
const DisplayDigitalScholarshipInfo = manageDataDisplay([
  "Title",
  "URL",
  "DOI",
  "Type",
  "Embargo",
  "License",
]);
// Material
const DisplayMaterialInfo = manageDataDisplay(["Title", "URL", "Type"]);
// Monograph
const DisplayMonographInfo = manageDataDisplay([
  "Title",
  "URL",
  "DOI",
  "Type",
  "Embargo",
  "License",
]);
// Peer Review
const DisplayPeerRevInfo = manageDataDisplay(["Title", "URL", "Type"]);
// Preprint
const DisplayPreprintInfo = manageDataDisplay([
  "Title",
  "URL",
  "DOI",
  "Type",
  "License",
]);
// Pre Regs
const DisplayPreRegAnalysisInfo = manageDataDisplay([
  "Title",
  "URL",
  "DOI",
  "Type",
]);
// Protocol
const DisplayProtocolInfo = manageDataDisplay(["Title", "URL", "DOI", "Type"]);
// Reg Report
const DisplayRegReportInfo = manageDataDisplay(["Title", "URL", "Type"]);
// Thesis
const DisplayThesisInfo = manageDataDisplay([
  "Title",
  "URL",
  "DOI",
  "Type",
  "Format",
  "License",
]);

export {
  DisplayArticleInfo,
  DisplayCodeInfo,
  DisplayDatasetInfo,
  DisplayDigitalScholarshipInfo,
  DisplayMaterialInfo,
  DisplayMonographInfo,
  DisplayPeerRevInfo,
  DisplayPreRegAnalysisInfo,
  DisplayPreprintInfo,
  DisplayProtocolInfo,
  DisplayRegReportInfo,
  DisplayThesisInfo,
};
