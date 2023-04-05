const DisplayPreRegAnalysisInfo = ({ preRegAnalysisData, field }) => {
  return preRegAnalysisData.map((preRegAnalysis, index) => {
    return (
      <div key={index} className="Results__List">
        <div className="Results__Item">
          <div>
            <h6>{`Pre-Registration Analysis Plan ${index + 1}`}</h6>
            {field("Title", preRegAnalysis.preRegTitle)}
            {field("URL", preRegAnalysis.preRegURL)}
            {field("DOI", preRegAnalysis.preRegDistinction)}
          </div>
        </div>
      </div>
    );
  });
};

export default DisplayPreRegAnalysisInfo;
