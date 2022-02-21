import React, { useState } from "react";

import Dataset from "../forms/Dataset";
import validate from "../../validationRules/DataVR";

function Datasets({ formData, setFormData }) {
  const [display, setDisplay] = useState(false);

  const [errors, setErrors] = useState({});

  const [datasetInfo, setDatasetInfo] = useState({
    dataURL: "",
    dataDOI: "",
    format: "",
    dataLicence: "",
  });

  const handleClick = (e) => {
    e.preventDefault();

    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(datasetInfo);
    setErrors(newErrors);

    if (
      !newErrors.URL &&
      !newErrors.DOI &&
      !newErrors.licence &&
      !newErrors.format
    ) {
      formData.datasets.push(datasetInfo);

      setDatasetInfo({
        dataURL: "",
        dataDOI: "",
        format: "",
        dataLicence: "",
      });

      setErrors({});
      setDisplay(!display);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setDatasetInfo({
      dataURL: "",
      dataDOI: "",
      format: "",
      dataLicence: "",
    });

    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, dataset) => {
    e.preventDefault();

    let filteredArray = formData.datasets.filter((item) => item !== dataset);
    setFormData({ ...formData, datasets: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Datasets</h2>
        {formData.datasets.map((dataset) => (
          <div className="output-type row">
            <h4 className="output-title col">{dataset.dataURL}</h4>
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
