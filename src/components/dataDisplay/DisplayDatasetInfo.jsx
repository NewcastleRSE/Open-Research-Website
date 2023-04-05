const DisplayDatasetInfo = ({ datasetData, field }) => {
  return datasetData.map((dataset, index) => {
    return (
      <div key={index} className="Results__List">
        <div className="Results__Item">
          <div>
            <h6>{`Dataset ${index + 1}`}</h6>
            {field("Title", dataset.dataTitle)}
            {field("URL", dataset.dataURL)}
            {field("DOI", dataset.dataDOI)}
            {field("Format", dataset.format)}
            {field("License", dataset.dataLicense)}
          </div>
        </div>
      </div>
    );
  });
};

export default DisplayDatasetInfo;
