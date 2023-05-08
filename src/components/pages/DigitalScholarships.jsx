import { useState } from "react";
import DigitalScholarshipModal from "../formModals/DigitalScholarshipModal";
import validate from "../../validationRules/DigitalScholarshipVR";
import { v4 as uuidv4 } from "uuid";

function DigitalScholarships({ formData, setFormData, display, setDisplay }) {
  const [errors, setErrors] = useState({});
  const [currDs, setCurrDs] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [dsInfo, setDSInfo] = useState({
    dsTitle: "",
    dsURL: "",
    dsEmbargo: false,
    dsLicense: "",
  });

  const wipeInfo = () => {
    setDSInfo({ dsTitle: "", dsURL: "", dsEmbargo: false, dsLicense: "" });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!editMode) {
      wipeInfo();
    }
    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(dsInfo);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // dsInfo.dsEmbargo = str2bool(dsInfo.dsEmbargo);

      if (!editMode) {
        setFormData({
          ...formData,
          DigitalScholarship: [
            ...formData.DigitalScholarship,
            { ...dsInfo, id: uuidv4() },
          ],
        });
      } else {
        const updatedData = formData.DigitalScholarship.map((i) =>
          i.id === currDs.id ? dsInfo : i
        );
        const updatedFormData = {
          ...formData,
          DigitalScholarship: updatedData,
        };
        setFormData(updatedFormData);
      }

      wipeInfo();
      setErrors({});
      setDisplay(!display);
      setEditMode(false);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    wipeInfo();
    setErrors({});
    setDisplay(!display);
  };

  const handleEdit = (e, ds) => {
    e.preventDefault();

    setCurrDs(ds);
    setDSInfo({
      ...ds,
    });

    setEditMode(true);
    setDisplay(!display);
  };

  const handleDelete = (e, ds) => {
    e.preventDefault();

    let filteredArray = formData.DigitalScholarship.filter(
      (item) => item !== ds
    );
    setFormData({ ...formData, DigitalScholarship: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Digital Scholarships</h2>
        {formData.DigitalScholarship.map((ds, index) => (
          <div className="output-type row" key={index}>
            <h4 className="output-title col">{ds.dsTitle}</h4>
            <span
              className="output-edit"
              style={{ cursor: "pointer", marginRight: "1rem" }}
            >
              <p onClick={(e) => handleEdit(e, ds)}>Edit</p>
            </span>
            <span className="output-delete">
              <p onClick={(e) => handleDelete(e, ds)}>Remove</p>
            </span>
          </div>
        ))}
        <button
          type="button"
          className="forward"
          onClick={(e) => handleClick(e)}
        >
          Add Digital Scholarship
        </button>
      </div>

      <DigitalScholarshipModal
        show={display}
        formData={dsInfo}
        setFormData={setDSInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        errors={errors}
      />
    </div>
  );
}

export default DigitalScholarships;
