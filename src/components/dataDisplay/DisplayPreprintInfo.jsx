import React from "react";
const DisplayPreprintInfo = ({ preprintData, field }) => {
  return preprintData.map((preprint, index) => {
    return (
      <div key={index} className="Results__List">
        {field("Title", preprint.title)}
        {field("URL", preprint.url)}
        {field("DOI", preprint.doi)}
        {field("License", preprint.license)}
      </div>
    );
  });
};

export default DisplayPreprintInfo;
