const DisplayPreRegAnalysisInfo = ({ preRegAnalysisData, field }) => {
  return preRegAnalysisData.map((preRegAnalysis, index) => {
    return (
      <div key={index} className="Results__List">
        {field("Title", preRegAnalysis.preRegTitle)}
        {field("URL", preRegAnalysis.preRegURL)}
        {field("DOI", preRegAnalysis.preRegDistinction)}
      </div>
    );
  });
};

export default DisplayPreRegAnalysisInfo;
