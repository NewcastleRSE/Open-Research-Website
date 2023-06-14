import React from "react";

const DisplayCodeInfo = ({ codeData, field }) => {
  return codeData.map((code, index) => {
    return (
      <div key={index} className="Results__List">
        {field("Title", code.title)}
        {field("URL", code.url)}
        {field("DOI", code.doi)}
        {field("Open Source", code.openSource)}
        {code.openSource == "Yes" && field("License", code.license)}
      </div>
    );
  });
};

export default DisplayCodeInfo;
