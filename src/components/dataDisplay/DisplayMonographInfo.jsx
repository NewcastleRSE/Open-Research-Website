const DisplayMonographInfo = ({ monographData, field }) => {
  console.log(monographData);
  return monographData.map((monograph, index) => {
    return (
      <div key={index} className="Results__List">
        {field("Title", monograph.monographTitle)}
        {field("URL", monograph.monographURL)}
        {field("DOI", monograph.monographDOI)}
        {field("Embargo", monograph.monographEmbargo ? "True" : "False")}
        {field("License", monograph.monographLicense)}
      </div>
    );
  });
};

export default DisplayMonographInfo;
