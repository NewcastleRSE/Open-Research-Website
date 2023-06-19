import manageDataDisplay from "../hoc/manageDataDisplay";

// props which will apply to all sections
const defaultProps = [
  { label: "Title", prop: "title" },
  { label: "URL", prop: "url" },
  { label: "Type", prop: "type" },
];

// specific props
const doi = [{ label: "DOI", prop: "doi" }];
const embargo = [{ label: "Embargo", prop: "embargo" }];
const license = [{ label: "License", prop: "license" }];
const openSource = [{ label: "Open Source", prop: "openSource" }];
const format = [{ label: "Format", prop: "format" }];

const DisplayArticleInfo = manageDataDisplay([
  ...defaultProps,
  ...doi,
  ...embargo,
  ...license,
]);
const DisplayCodeInfo = manageDataDisplay([
  ...defaultProps,
  ...doi,
  ...openSource,
]);
const DisplayDatasetInfo = manageDataDisplay([
  ...defaultProps,
  ...format,
  ...license,
]);
const DisplayDigitalScholarshipInfo = manageDataDisplay([
  ...defaultProps,
  ...doi,
  ...embargo,
  ...license,
]);
const DisplayMaterialInfo = manageDataDisplay([...defaultProps]);
const DisplayMonographInfo = manageDataDisplay([
  ...defaultProps,
  ...doi,
  ...embargo,
  ...license,
]);
const DisplayPeerRevInfo = manageDataDisplay([...defaultProps]);
const DisplayPreprintInfo = manageDataDisplay([
  ...defaultProps,
  ...doi,
  ...license,
]);
const DisplayPreRegAnalysisInfo = manageDataDisplay([...defaultProps, ...doi]);
const DisplayProtocolInfo = manageDataDisplay([...defaultProps, ...doi]);
const DisplayRegReportInfo = manageDataDisplay([...defaultProps]);
const DisplayThesisInfo = manageDataDisplay([
  ...defaultProps,
  ...doi,
  ...format,
  ...license,
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
