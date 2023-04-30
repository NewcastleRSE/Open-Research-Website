const DisplayRegReportInfo = ({ regReportData, field }) => {
  return regReportData.map((regReport, index) => {
    return (
      <div key={index} className="Results__List">
        {field("Title", regReport.regReportTitle)}
        {field("URL", regReport.regReportURL)}
      </div>
    );
  });
};

export default DisplayRegReportInfo;
