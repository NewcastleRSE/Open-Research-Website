import React from "react";
const DisplayThesisInfo = ({ thesisData, field }) => {
  return thesisData.map((thesis, index) => {
    return (
      <div key={index} className="Results__List">
        {field("Title", thesis.title)}
        {field("URL", thesis.url)}
        {field("DOI", thesis.doi)}
        {field("Format", thesis.format)}
        {field("License", thesis.license)}
      </div>
    );
  });
};

export default DisplayThesisInfo;
