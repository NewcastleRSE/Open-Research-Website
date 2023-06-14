import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const manageComponentPages = (
  Component,
  Modal,
  validate,
  dataKey,
  initialData
) => {
  return (props) => {
    const [data, setData] = useState(initialData);
    const [errors, setErrors] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [display, setDisplay] = useState(false);
    const [currentId, setCurrentId] = useState(null);

    const handleToggleDisplay = () => {
      if (!editMode) {
        resetData();
      }
      setDisplay(!display);
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      const newErrors = validate(data);
      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        const newData = editMode
          ? props.formData[dataKey].map((item) =>
              item.id === currentId ? data : item
            )
          : [...props.formData[dataKey], { ...data, id: uuidv4() }];

        props.setFormData({
          ...props.formData,
          [dataKey]: newData,
        });

        resetData();
        setErrors({});
        setDisplay(!display);
        setEditMode(false);
      }
    };

    const resetData = () => {
      setData(initialData);
    };

    const handleEdit = (item) => {
      setEditMode(true);
      setCurrentId(item.id);
      setData(item);
      setDisplay(true);
    };

    const handleDelete = (id) => {
      const newData = props.formData[dataKey].filter((item) => item.id !== id);
      props.setFormData({
        ...props.formData,
        [dataKey]: newData,
      });
    };

    return (
      <Component
        {...props}
        data={props.formData[dataKey]}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onToggleDisplay={handleToggleDisplay}
      >
        <Modal
          show={display}
          data={data}
          setData={setData}
          onToggleDisplay={handleToggleDisplay}
          onSubmit={handleSubmit}
          errors={errors}
        />
      </Component>
    );
  };
};

export default manageComponentPages;
