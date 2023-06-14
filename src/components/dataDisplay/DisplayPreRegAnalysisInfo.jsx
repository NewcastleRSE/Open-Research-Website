import React from "react";
const DisplayPreRegAnalysisInfo = ({ preRegAnalysisData, field }) => {
  return preRegAnalysisData.map((preRegAnalysis, index) => {
    return (
      <div key={index} className="Results__List">
        {field("Title", preRegAnalysis.title)}
        {field("URL", preRegAnalysis.url)}
        {field("DOI", preRegAnalysis.distinction)}
      </div>
    );
  });
};

export default DisplayPreRegAnalysisInfo;
