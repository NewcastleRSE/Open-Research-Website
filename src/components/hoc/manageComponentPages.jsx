import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import validate from "../../validationRules/Validation";

export default function manageComponentPages(
  WrappedComponent,
  initialFormState,
  dataType,
  validationName,
  label,
  Modal
) {
  return function FormHandlingComponent({
    formData,
    setFormData,
    display,
    setDisplay,
    ...props
  }) {
    const [errors, setErrors] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [currItem, setCurrItem] = useState({});
    const [itemInfo, setItemInfo] = useState(initialFormState);

    const handleSave = (e) => {
      e.preventDefault();
      let newErrors = validate(itemInfo, validationName);
      setErrors(newErrors);
      if (Object.keys(newErrors).length === 0) {
        itemInfo.complete = true;
        itemInfo.selected = true;
        const updatedItems = formData[dataType].map((i) =>
          i.id === currItem.id ? itemInfo : i
        );
        const updatedFormData = {
          ...formData,
          [dataType]: updatedItems,
        };
        setFormData(updatedFormData);

        wipeItemInfo();
        setErrors({});
        setDisplay(!display);
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      let newErrors = validate(itemInfo, validationName);
      setErrors(newErrors);
      console.log(formData);
      console.log(errors);
      if (Object.keys(newErrors).length === 0) {
        if (!editMode) {
          let temp = { ...itemInfo };
          temp.id = uuidv4();
          temp.complete = true;
          setFormData({
            ...formData,
            [dataType]: [...formData[dataType], temp],
          });
        } else {
          const updatedItems = formData[dataType].map((i) =>
            i.id === currItem.id ? itemInfo : i
          );
          const updatedFormData = {
            ...formData,
            [dataType]: updatedItems,
          };
          setFormData(updatedFormData);
        }

        wipeItemInfo();
        setErrors({});
        setDisplay(!display);
        setEditMode(false);
      }
    };

    const wipeItemInfo = () => {
      setItemInfo(initialFormState);
    };

    const handleCancel = (e) => {
      e.preventDefault();
      wipeItemInfo();
      setErrors({});
      setDisplay(!display);
    };

    const handleDelete = (e, item) => {
      e.preventDefault();
      let filteredArray = formData[dataType].filter((i) => i !== item);
      setFormData({ ...formData, [dataType]: filteredArray });
    };

    const handleEdit = (e, item) => {
      e.preventDefault();
      setCurrItem(item);
      setItemInfo({ ...item });
      setEditMode(true);
      setDisplay(!display);
    };

    const handleToggleEntry = (e, item) => {
      e.preventDefault();
      setItemInfo(item);
      setCurrItem(item);
      if (item.complete) {
        const updatedItems = formData[dataType].map((i) =>
          i.id === item.id ? { ...i, selected: !i.selected, complete: true } : i
        );
        const updatedFormData = {
          ...formData,
          [dataType]: updatedItems,
        };
        setFormData(updatedFormData);
      } else {
        setErrors({});
        setDisplay(!display);
      }
    };

    return (
      <WrappedComponent
        formData={formData}
        setFormData={setFormData}
        display={display}
        setDisplay={setDisplay}
        itemInfo={itemInfo}
        setItemInfo={setItemInfo}
        errors={errors}
        setErrors={setErrors}
        handleSave={handleSave}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleToggleEntry={handleToggleEntry}
        dataType={dataType}
        validationName={validationName}
        label={label}
        Modal={Modal}
        {...props}
      />
    );
  };
}
