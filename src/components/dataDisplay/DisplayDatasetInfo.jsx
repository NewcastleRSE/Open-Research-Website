import React from "react";

const DisplayDatasetInfo = ({ datasetData, field }) => {
  return datasetData.map((dataset, index) => {
    return (
      <div key={index} className="Results__List">
        {field("Title", dataset.title)}
        {field("URL", dataset.url)}
        {field("DOI", dataset.doi)}
        {field("Format", dataset.format)}
        {field("License", dataset.dataLicense)}
      </div>
    );
  });
};

export default DisplayDatasetInfo;
