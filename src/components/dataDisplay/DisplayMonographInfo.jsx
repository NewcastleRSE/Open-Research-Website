const DisplayMonographInfo = ({ monographData, field }) => {
  return monographData.map((monograph, index) => {
    return (
      <div key={index} className="Results__List">
        <div className="Results__Item">
          <div>
            <h6>{`Monograph ${index + 1}`}</h6>
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
