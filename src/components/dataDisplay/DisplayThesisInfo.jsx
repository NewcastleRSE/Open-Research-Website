const DisplayThesisInfo = ({ thesisData, field }) => {
  return thesisData.map((thesis, index) => {
    return (
      <div key={index} className="Results__List">
        <div className="Results__Item">
          <div>
            {field("Title", thesis.dataTitle)}
            {field("URL", thesis.dataURL)}
            {field("DOI", thesis.dataDOI)}
            {field("Format", thesis.format)}
            {field("License", thesis.dataLicense)}
          </div>
        </div>
      </div>
    );
  });
};

export default DisplayThesisInfo;
