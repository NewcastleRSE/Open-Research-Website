import React, { useState } from "react";

// this function will take some formData and the users works and then return a formData object with the updated works.
const sortOrcidData = async (formData, works) => {
  console.log("formData", formData);
  console.log("works", works);
  let updatedFormData = sortData(works, formData);
  console.log(updatedFormData);
  return updatedFormData;
};

const sortData = (works, formData) => {
  let newFormData = formData;
  let entry;
  let temp;
  works.map((group) => {
    const workSummary = group["work-summary"][0];
    console.log(workSummary.type);
    switch (workSummary.type) {
      case "research-tool":
        // format then add to relevant formData section
        break;
      case "license":
        // add to relevant formData section
        break;
      case "book":
        entry = formatData(workSummary);
        temp = {
          ...newFormData,
          Monograph: [...newFormData.Monograph, entry],
        };
        newFormData = temp;
        break;
      case "book-chapter":
        // entry = formatData(workSummary);
        // temp = {
        //   ...newFormData,
        //   Monograph: [...newFormData.Mongraph, entry],
        // };
        // setNewFormData(temp);
        break;
      case "dissertation-thesis":
        // entry = formatData(workSummary);
        // temp = {
        //   ...newFormData,
        //   Thesis: [...newFormData.Thesis, entry],
        // };
        // setNewFormData(temp);
        break;
      case "preprint":
        // entry = formatData(workSummary);
        // temp = {
        //   ...newFormData,
        //   Preprint: [...newFormData.Preprint, entry],
        // };
        // setNewFormData(temp);
        break;
      case "supervised-student-publication":
        // add to relevant formData section
        break;
      case "review":
        entry = formatData(workSummary);
        temp = {
          ...newFormData,
          PeerRev: [...newFormData.PeerRev, entry],
        };
        console.log("temp", temp);
        newFormData = temp;
        break;
      case "journal-article":
        // entry = formatData(workSummary);
        // temp = {
        //   ...newFormData,
        //   Articles: [...newFormData.Articles, entry],
        // };
        // setNewFormData(temp);
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
      case "dictionary-entry":
        // add to relevant formData section
        break;
      case "patent":
        // add to relevant formData section
        break;
      case "newsletter-article":
        // add to relevant formData section
        break;
      case "software":
        // add to relevant formData section
        break;
      case "conference-poster":
        // add to relevant formData section
        break;
      case "dictionary-entry":
        // add to relevant formData section
        break;
      case "patent":
        // format then add to relevant formData section
        break;
      case "newsletter-article":
        // add to relevant formData section
        break;
      case "software":
        console.log("software entry");
        entry = formatData(workSummary);
        console.log("entry", entry);
        temp = {
          ...newFormData,
          Code: [...newFormData.Code, entry],
        };
        newFormData = temp;
        break;
      case "conference-abstract":
        // add to relevant formData section
        break;
      case "book-review":
        // add to relevant formData section
        break;
      case "standards-and-policy":
        // add to relevant formData section
        break;
      case "data-set":
        // add to relevant formData section
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
        // add to relevant formData section
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
        // format then add to relevant formData section
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

  return newFormData;
};

const formatData = (workSummary) => {
  console.log("workSummary", workSummary);
  const {
    title,
    "put-code": projectID = "",
    type: type = "",
    url,
  } = workSummary;

  const urlValue = url && url.value !== undefined ? url.value : "";
  const titleValue = title && title.value !== undefined ? title.value : "";

  const entry = {
    title: { value: titleValue },
    projectID,
    type,
    url: { value: urlValue },
  };
  return entry;
};

export default sortOrcidData;
