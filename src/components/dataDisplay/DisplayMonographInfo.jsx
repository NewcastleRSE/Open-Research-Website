import React from "react";

const DisplayMonographInfo = ({ monographData, field }) => {
  return monographData.map((monograph, index) => {
    return (
      <div key={index} className="Results__List">
        {field("Title", monograph.title)}
        {field("URL", monograph.url)}
        {field("DOI", monograph.doi)}
        {field("Embargo", monograph.embargo)}
        {field("License", monograph.license)}
      </div>
    );
  });
};

export default DisplayMonographInfo;
