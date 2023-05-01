const DisplayCodeInfo = ({ codeData, field }) => {
  return codeData.map((code, index) => {
    return (
      <div key={index} className="Results__List">
        {field("Title", code.codeTitle)}
        {field("URL", code.codeURL)}
        {field("DOI", code.codeDOI)}
        {field("Open Source", code.openSource)}
        {code.openSource == "Yes" && field("License", code.codeLicense)}
      </div>
    );
  });
};

export default DisplayCodeInfo;
