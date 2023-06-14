import React from "react";
const DisplayRegReportInfo = ({ regReportData, field }) => {
  return regReportData.map((regReport, index) => {
    return (
      <div key={index} className="Results__List">
        {field("Title", regReport.title)}
        {field("URL", regReport.url)}
      </div>
    );
  });
};

export default DisplayRegReportInfo;
