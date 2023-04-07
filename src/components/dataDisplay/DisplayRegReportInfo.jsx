const DisplayRegReportInfo = ({ regReportData, field }) => {
  return regReportData.map((regReport, index) => {
    return (
      <div key={index} className="Results__List">
        <div className="Results__Item">
          <div>
            <h6>{`Registered Report ${index + 1}`}</h6>
            {field("Title", regReport.regReportTitle)}
            {field("URL", regReport.regReportURL)}
          </div>
        </div>
      </div>
    );
  });
};

export default DisplayRegReportInfo;
