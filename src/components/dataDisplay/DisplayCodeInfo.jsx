const DisplayCodeInfo = ({ codeData, field }) => {
  return codeData.map((code, index) => {
    return (
      <div key={index} className="Results__List">
        <div className="Results__Item">
          <div>
            <h6>{`Code and Software ${index + 1}`}</h6>
            {field("Title", code.codeTitle)}
            {field("URL", code.codeURL)}
            {field("DOI", code.codeDOI)}
            {field("Open Source?", code.openSource ? "True" : "False")}
            {field("License", code.codeLicense)}
          </div>
        </div>
      </div>
    );
  });
};

export default DisplayCodeInfo;
