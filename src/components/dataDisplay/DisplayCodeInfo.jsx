const DisplayCodeInfo = ({ codeData, field }) => {
  return codeData.map((code, index) => {
    return (
      <div key={index} className="Results__List">
        <div className="Results__Item">
          <div>
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
