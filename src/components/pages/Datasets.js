import React, { useState } from "react";

import Dataset from "../forms/Dataset";
import validate from "../../validationRules/DataVR";
import str2bool from "../../util/str2bool";

function Datasets({ formData, setFormData }) {
  const [display, setDisplay] = useState(false);

  const [errors, setErrors] = useState({});

  const [datasetInfo, setDatasetInfo] = useState({
    dataTitle: "",
    dataURL: "",
    dataDOI: "",
    format: "",
    dataLicense: "",
    dataMetadata: "",
    dataFair: "",
    dataRelease: "",
    dataConf: "",
  });

  const handleClick = (e) => {
    e.preventDefault();

    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(datasetInfo);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      datasetInfo.dataMetadata = str2bool(datasetInfo.dataMetadata);
      datasetInfo.dataFair = str2bool(datasetInfo.dataFair);
      datasetInfo.dataRelease = str2bool(datasetInfo.dataRelease);
      datasetInfo.dataConf = str2bool(datasetInfo.dataConf);

      formData.Dataset.push(datasetInfo);

      setDatasetInfo({
        dataTitle: "",
        dataURL: "",
        dataDOI: "",
        format: "",
        dataLicense: "",
        dataMetadata: "",
        dataFair: "",
        dataRelease: "",
        dataConf: "",
      });

      setErrors({});
      setDisplay(!display);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setDatasetInfo({
      dataTitle: "",
      dataURL: "",
      dataDOI: "",
      format: "",
      dataLicense: "",
      dataMetadata: "",
      dataFair: "",
      dataRelease: "",
      dataConf: "",
    });

    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, dataset) => {
    e.preventDefault();

    let filteredArray = formData.Dataset.filter((item) => item !== dataset);
    setFormData({ ...formData, Dataset: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Datasets</h2>
        {formData.Dataset.map((dataset) => (
          <div className="output-type row">
            <h4 className="output-title col">{dataset.dataTitle}</h4>
            <span className="output-delete">
              <p onClick={(e) => handleDelete(e, dataset)}>Remove</p>
            </span>
          </div>
        ))}
        <button
          type="button"
          className="forward"
          onClick={(e) => handleClick(e)}
        >
          Add Dataset
        </button>
      </div>

      <Dataset
        show={display}
        formData={datasetInfo}
        setFormData={setDatasetInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        errors={errors}
      />
    </div>
  );
}

export default Datasets;
