const DisplayMonographInfo = ({ monographData, field }) => {
  return monographData.map((monograph, index) => {
    return (
      <div key={index} className="Results__List">
        <div className="Results__Item">
          <div>
            {field("Title", monograph.monographTitle)}
            {field("URL", monograph.monographURL)}
            {field("DOI", monograph.monographDOI)}
            {field("Embargo", monograph.monographEmbargo)}
            {field("License", monograph.monographLicense)}
          </div>
        </div>
      </div>
    );
  });
};

export default DisplayMonographInfo;
