import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import sectionTypes from "../data/sectionTypes";

// this function will take some formData and the users works and then return a formData object with the updated works.
const sortOrcidData = async (formData, works) => {
  let updatedFormData = sortData(works, formData);
  return updatedFormData;
};

// REFACTOR THIS SO THAT IT'S A SWITCH STATEMENT THAT LOOKS AT EACH TYPE BY CHECKING WHICH SECTION THE WORKS TYPE IS IN USING SECTIONTYPES.JSON

// takes the array of works and sorts them into the correct category in formData, in the correct format.
const sortData = (works, data) => {
  let formData = JSON.parse(JSON.stringify(data));
  works.forEach((group) => {
    const workSummary = group["work-summary"][0];
    let entry = formatData(workSummary);
    entry.id = uuidv4();
    entry.selected = false;
    entry.orcid = true;

    // each case is a type of work that can be submitted to Orcid. Multiple may fit into different categories. Each case gives the entry a type and then adds it to the appropriate category in formData, if it's not already there.
    switch (workSummary.type) {
      case "research-tool":
        entry.type = "Research Tool";
        break;
      case "license":
        entry.type = "License";
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
        entry.type = "Dissertation";
        if (!formData.Thesis.some((e) => e.projectID === entry.projectID)) {
          formData.Thesis.push(entry);
        }
        break;
      case "preprint":
        entry.type = "Preprint";
        if (!formData.Preprint.some((e) => e.projectID === entry.projectID)) {
          formData.Preprint.push(entry);
        }
        break;
      case "supervised-student-publication":
        entry.type = "Supervised Student Publication";
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
        entry.type = "Invention";
        break;
      case "artistic-performance":
        entry.type = "Artistic Performance";
        break;
      case "spin-off-company":
        entry.type = "Spin Off Company";
        break;
      case "conference-poster":
        entry.type = "Conference Poster";
        break;
      case "newsletter-article":
        entry.type = "Newsletter Article";
        if (!formData.Article.some((e) => e.projectID === entry.projectID)) {
          formData.Article.push(entry);
        }
        break;
      case "dictionary-entry":
        entry.type = "Dictionary Entry";
        break;
      case "patent":
        entry.type = "Patent";
        break;
      case "software":
        entry.type = "Software";
        if (!formData.Code.some((e) => e.projectID === entry.projectID)) {
          formData.Code.push(entry);
        }
        break;
      case "conference-abstract":
        entry.type = "Conference Abstract";
        break;
      case "book-review":
        entry.type = "Book Review";
        if (!formData.Monograph.some((e) => e.projectID === entry.projectID)) {
          formData.Monograph.push(entry);
        }
        break;
      case "standards-and-policy":
        entry.type = "Standards and Policy";
        break;
      case "data-set":
        entry.type = "Dataset";
        if (!formData.Dataset.some((e) => e.projectID === entry.projectID)) {
          formData.Dataset.push(entry);
        }
        break;
      case "research-technique":
        entry.type = "Research Technique";
        break;
      case "other":
        entry.type = "Other";
        break;
      case "technical-standard":
        entry.type = "Technical Standard";
        break;
      case "data-management-plan":
        entry.type = "Data Management Plan";
        if (!formData.Dataset.some((e) => e.projectID === entry.projectID)) {
          formData.Dataset.push(entry);
        }
        break;
      case "trademark":
        entry.type = "Trademark";
        break;
      case "translation":
        entry.type = "Translation";
        break;
      case "journal-issue":
        entry.type = "Journal Issue";
        if (!formData.Article.some((e) => e.projectID === entry.projectID)) {
          formData.Article.push(entry);
        }
        break;
      case "manual":
        entry.type = "Manual";
        break;
      case "encylopedia-entry":
        entry.type = "Encylopedia Entry";
        break;
      case "disclosure":
        entry.type = "Disclosure";
        break;
      case "annotation":
        entry.type = "Annotation";
        break;
      case "physical-object":
        entry.type = "Physical Object";
        break;
      case "magazine-article":
        entry.type = "Magazine Article";
        if (!formData.Article.some((e) => e.projectID === entry.projectID)) {
          formData.Article.push(entry);
        }
        break;
      case "website":
        entry.type = "Website";
        break;
      case "lecture-speech":
        entry.type = "Lecture Speech";
        break;
      case "conference-paper":
        entry.type = "Conference Paper";
        if (!formData.Monograph.some((e) => e.projectID === entry.projectID)) {
          formData.Monograph.push(entry);
        }
        break;
      case "online-resource":
        entry.type = "Online Resource";
        break;
      case "edited-book":
        entry.type = "Edited Book";
        if (!formData.Monograph.some((e) => e.projectID === entry.projectID)) {
          formData.Monograph.push(entry);
        }
        break;
      case "registered-copyright":
        entry.type = "Registered Copyright";
        break;
      case "test":
        entry.type = "Test";
        break;
    }
  });

  return formData;
};

// Formats the data by flattening it and makes a single depth object with a title, put-code, type and url.
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
