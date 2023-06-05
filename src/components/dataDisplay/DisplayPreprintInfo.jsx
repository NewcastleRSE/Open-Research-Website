import React from "react";
const DisplayPreprintInfo = ({ preprintData, field }) => {
  return preprintData.map((preprint, index) => {
    return (
      <div key={index} className="Results__List">
        {field("Title", preprint.preprintTitle)}
        {field("URL", preprint.preprintURL)}
        {field("DOI", preprint.preprintDOI)}
        {field("License", preprint.preprintLicense)}
      </div>
    );
  });
};

export default DisplayPreprintInfo;
