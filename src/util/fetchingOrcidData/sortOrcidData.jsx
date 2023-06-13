import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// this function will take some formData and the users works and then return a formData object with the updated works.
const sortOrcidData = async (formData, works) => {
  let updatedFormData = sortData(works, formData);
  return updatedFormData;
};

const sortData = (works, data) => {
  let formData = JSON.parse(JSON.stringify(data));
  works.forEach((group) => {
    const workSummary = group["work-summary"][0];
    let entry = formatData(workSummary);
    entry.id = uuidv4();
    entry.embargo = "";
    entry.license = "";
    entry.doi = "";

    switch (workSummary.type) {
      case "research-tool":
        // format then add to relevant formData section
        break;
      case "license":
        // add to relevant formData section
        break;
      case "book":
        entry.type = "Book";
        if (!formData.Monograph.some((e) => e.projectID === entry.projectID)) {
          formData.Monograph.push(entry);
        }
        break;
      case "book-chapter":
        entry.type = "Book Chapter";
        if (!formData.Monograph.some((e) => e.projectID === entry.projectID)) {
          formData.Monograph.push(entry);
        }
        break;
      case "dissertation-thesis":
        if (!formData.Thesis.some((e) => e.projectID === entry.projectID)) {
          formData.Thesis.push(entry);
        }
        break;
      case "preprint":
        if (!formData.Preprint.some((e) => e.projectID === entry.projectID)) {
          formData.Preprint.push(entry);
        }
        break;
      case "supervised-student-publication":
        // add to relevant formData section
        break;
      case "review":
        entry.type = "Review";
        if (!formData.PeerRev.some((e) => e.projectID === entry.projectID)) {
          formData.PeerRev.push(entry);
        }
        break;
      case "journal-article":
        entry.type = "Journal Article";
        if (!formData.Article.some((e) => e.projectID === entry.projectID)) {
          formData.Article.push(entry);
        }
        break;
      case "invention":
        // add to relevant formData section
        break;
      case "artistic-performance":
        // format then add to relevant formData section
        break;
      case "spin-off-company":
        // add to relevant formData section
        break;
      case "conference-poster":
        // add to relevant formData section
        break;
      case "newsletter-article":
        entry.type = "Newsletter Article";
        if (!formData.Article.some((e) => e.projectID === entry.projectID)) {
          formData.Article.push(entry);
        }
        break;
      case "dictionary-entry":
        // add to relevant formData section
        break;
      case "patent":
        // format then add to relevant formData section
        break;
      case "software":
        entry.type = "Software";
        if (!formData.Code.some((e) => e.projectID === entry.projectID)) {
          formData.Code.push(entry);
        }
        break;
      case "conference-abstract":
        // add to relevant formData section
        break;
      case "book-review":
        entry.type = "Book Review";
        if (!formData.Monograph.some((e) => e.projectID === entry.projectID)) {
          formData.Monograph.push(entry);
        }
        break;
      case "standards-and-policy":
        // add to relevant formData section
        break;
      case "data-set":
        entry.type = "Dataset";
        if (!formData.Dataset.some((e) => e.projectID === entry.projectID)) {
          formData.Dataset.push(entry);
        }
        break;
      case "research-technique":
        // add to relevant formData section
        break;
      case "other":
        // add to relevant formData section
        break;
      case "technical-standard":
        // add to relevant formData section
        break;
      case "data-management-plan":
        // add to relevant formData section
        break;
      case "trademark":
        // add to relevant formData section
        break;
      case "translation":
        // add to relevant formData section
        break;
      case "journal-issue":
        entry.type = "Journal Issue";
        if (!formData.Article.some((e) => e.projectID === entry.projectID)) {
          formData.Article.push(entry);
        }
        break;
      case "manual":
        // add to relevant formData section
        break;
      case "encylopedia-entry":
        // add to relevant formData section
        break;
      case "disclosure":
        // add to relevant formData section
        break;
      case "annotation":
        // add to relevant formData section
        break;
      case "physical-object":
        // add to relevant formData section
        break;
      case "magazine-article":
        entry.type = "Magazine Article";
        if (!formData.Article.some((e) => e.projectID === entry.projectID)) {
          formData.Article.push(entry);
        }
        break;
      case "website":
        // add to relevant formData section
        break;
      case "lecture-speech":
        // add to relevant formData section
        break;
      case "conference-paper":
        // add to relevant formData section
        break;
      case "online-resource":
        // add to relevant formData section
        break;
      case "edited-book":
        // add to relevant formData section
        break;
      case "registered-copyright":
        // add to relevant formData section
        break;
      case "test":
        // add to relevant formData section
        break;
    }
  });

  return formData;
};

const formatData = (workSummary) => {
  const {
    title,
    "put-code": projectID = "",
    type: type = "",
    url,
  } = workSummary;

  const urlValue = url && url.value !== undefined ? url.value : "";
  const titleValue =
    title && title.title.value !== undefined ? title.title.value : "";

  const formattedData = {
    title: titleValue,
    projectID,
    type,
    url: urlValue,
  };

  return formattedData;
};

export default sortOrcidData;
