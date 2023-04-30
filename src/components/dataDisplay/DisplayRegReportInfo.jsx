const DisplayRegReportInfo = ({ regReportData, field }) => {
  return regReportData.map((regReport, index) => {
    return (
      <div key={index} className="Results__List">
        <div className="Results__Item">
          <div>
            {field("Title", regReport.regReportTitle)}
            {field("URL", regReport.regReportURL)}
          </div>
        </div>
      </div>
    );
  });
};

export default DisplayRegReportInfo;
