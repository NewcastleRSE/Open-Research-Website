const DisplayPreprintInfo = ({ preprintData, field }) => {
  return preprintData.map((preprint, index) => {
    return (
      <div key={index} className="Results__List">
        <div className="Results__Item">
          <div>
            {field("Title", preprint.preprintTitle)}
            {field("URL", preprint.preprintURL)}
            {field("DOI", preprint.preprintDOI)}
            {field("License", preprint.dataLicense)}
          </div>
        </div>
      </div>
    );
  });
};

export default DisplayPreprintInfo;
