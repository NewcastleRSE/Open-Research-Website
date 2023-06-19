// Article Imports
import Article from "../forms/Article";
import ArticleHelp from "../formHelp/ArticleHelp";
// Code Imports
import Code from "../forms/Code";
import CodeHelp from "../formHelp/CodeHelp";
// Dataset Imports
import Dataset from "../forms/Dataset";
import DatasetHelp from "../formHelp/DatasetHelp";
// DigitalScholarship Imports
import DigitalScholarship from "../forms/DigitalScholarship";
import DigitalScholarshipHelp from "../formHelp/DigitalScholarshipHelp";
// Material Imports
import Material from "../forms/Material";
import MaterialHelp from "../formHelp/MaterialHelp";
// Monograph Imports
import Monograph from "../forms/Monograph";
import MonographHelp from "../formHelp/MonographHelp";
// PeerReview Imports
import PeerReview from "../forms/PeerReview";
import PeerReviewHelp from "../formHelp/PeerReviewHelp";
// Preprint Imports
import Preprint from "../forms/Preprint";
import PreprintHelp from "../formHelp/PreprintHelp";
// PreReg Imports
import PreReg from "../forms/PreReg";
import PreRegHelp from "../formHelp/PreRegHelp";
// Protocol Imports
import Protocol from "../forms/Protocol";
import ProtocolHelp from "../formHelp/ProtocolHelp";
// RegReport Imports
import RegReport from "../forms/RegReport";
import RegReportHelp from "../formHelp/RegReportHelp";
// Thesis Imports
import Thesis from "../forms/Thesis";
import ThesisHelp from "../formHelp/ThesisHelp";
// Project Imports
import Project from "../forms/Project";
import ProjectHelp from "../formHelp/ProjectHelp";
// Higher Order Modal Manager Component
import manageModals from "../hoc/manageModals";

// Create Modals
const ArticleModal = manageModals(Article, ArticleHelp);
const CodeModal = manageModals(Code, CodeHelp);
const DatasetModal = manageModals(Dataset, DatasetHelp);
const DigitalScholarshipModal = manageModals(
  DigitalScholarship,
  DigitalScholarshipHelp
);
const MaterialModal = manageModals(Material, MaterialHelp);
const MonographModal = manageModals(Monograph, MonographHelp);
const PeerReviewModal = manageModals(PeerReview, PeerReviewHelp);
const PreprintModal = manageModals(Preprint, PreprintHelp);
const PreRegModal = manageModals(PreReg, PreRegHelp);
const ProtocolModal = manageModals(Protocol, ProtocolHelp);
const RegReportModal = manageModals(RegReport, RegReportHelp);
const ThesisModal = manageModals(Thesis, ThesisHelp);
const ProjectModal = manageModals(Project, ProjectHelp);

// Export Modals
export {
  ArticleModal,
  CodeModal,
  DatasetModal,
  DigitalScholarshipModal,
  MaterialModal,
  MonographModal,
  PeerReviewModal,
  PreprintModal,
  PreRegModal,
  ProtocolModal,
  RegReportModal,
  ThesisModal,
  ProjectModal,
};
