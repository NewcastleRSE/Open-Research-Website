import React from "react";
import {
  ArticleModal,
  CodeModal,
  DatasetModal,
  DigitalScholarshipModal,
  MaterialModal,
  MonographModal,
  PeerReviewModal,
  PreRegModal,
  PreprintModal,
  ProtocolModal,
  RegReportModal,
  ThesisModal,
} from "../formModals/Modals";
import manageComponentPages from "../hoc/manageComponentPages";
import DisplayEntries from "./DisplayEntries";
import initialFormStates from "../../util/data/initialFormStates";

function DataSection({
  formData,
  setFormData,
  display,
  setDisplay,
  handleSave,
  handleSubmit,
  handleCancel,
  errors,
  currItem,
  setCurrItem,
  itemInfo,
  setItemInfo,
  handleEdit,
  handleDelete,
  handleToggleEntry,
  label,
  dataType,
  validationName,
  Modal,
}) {
  return (
    <div>
      <DisplayEntries
        formData={formData}
        handleToggleEntry={handleToggleEntry}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        dataType={dataType}
        display={display}
        label={label}
        setDisplay={setDisplay}
      />

      <Modal
        show={display}
        formData={itemInfo}
        setFormData={setItemInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        handleSave={handleSave}
        handleCancel={handleCancel}
        errors={errors}
      />
    </div>
  );
}

const Articles = manageComponentPages(
  DataSection,
  initialFormStates.Article,
  "Article",
  "Articles",
  "Article",
  ArticleModal
);
const Codes = manageComponentPages(
  DataSection,
  initialFormStates.Code,
  "Code",
  "Codes",
  "Code",
  CodeModal
);

const Datasets = manageComponentPages(
  DataSection,
  initialFormStates.Dataset,
  "Dataset",
  "Datasets",
  "Dataset",
  DatasetModal
);

const DigitalScholarships = manageComponentPages(
  DataSection,
  initialFormStates.DigitalScholarship,
  "DigitalScholarship",
  "DigitalScholarships",
  "Digital Scholarship",
  DigitalScholarshipModal
);
const Materials = manageComponentPages(
  DataSection,
  initialFormStates.Material,
  "Material",
  "Materials",
  "Material",
  MaterialModal
);

const Monographs = manageComponentPages(
  DataSection,
  initialFormStates.Monograph,
  "Monograph",
  "Monographs",
  "Monograph",
  MonographModal
);

const PeerReviews = manageComponentPages(
  DataSection,
  initialFormStates.PeerReview,
  "PeerRev",
  "Preprints",
  "Peer Review",
  PeerReviewModal
);

const Preprints = manageComponentPages(
  DataSection,
  initialFormStates.Preprint,
  "Preprint",
  "Preprints",
  "Pre-Print",
  PreprintModal
);

const PreRegs = manageComponentPages(
  DataSection,
  initialFormStates.PreReg,
  "PreRegAnalysis",
  "PreRegAnalyses",
  "Pre-Registered Analysis",
  PreRegModal
);

const Protocols = manageComponentPages(
  DataSection,
  initialFormStates.Protocol,
  "Protocol",
  "Protocols",
  "Protocol",
  ProtocolModal
);

const RegReports = manageComponentPages(
  DataSection,
  initialFormStates.RegReport,
  "RegReport",
  "RegisteredReports",
  "Registered Report",
  RegReportModal
);

const Theses = manageComponentPages(
  DataSection,
  initialFormStates.Thesis,
  "Thesis",
  "Theses",
  "Thesis",
  ThesisModal
);

export {
  Articles,
  Codes,
  Datasets,
  DigitalScholarships,
  Materials,
  Monographs,
  PeerReviews,
  Preprints,
  PreRegs,
  Protocols,
  RegReports,
  Theses,
};
