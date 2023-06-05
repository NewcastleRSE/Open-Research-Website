import React from "react";
const DisplayThesisInfo = ({ thesisData, field }) => {
  return thesisData.map((thesis, index) => {
    return (
      <div key={index} className="Results__List">
        {field("Title", thesis.dataTitle)}
        {field("URL", thesis.dataURL)}
        {field("DOI", thesis.dataDOI)}
        {field("Format", thesis.format)}
        {field("License", thesis.dataLicense)}
      </div>
    );
  });
};

export default DisplayThesisInfo;
