const DisplayEntries = ({
  dataType,
  formData,
  handleToggleEntry,
  handleDelete,
  handleEdit,
  display,
  setDisplay,
  label,
}) => {
  return (
    <div>
      <h2>{dataType}</h2>
      {formData[dataType].map((item, index) => (
        <div className="output-type row" key={index}>
          <h4 className="output-title col">{item.title}</h4>
          <span
            className="output-edit"
            style={{ cursor: "pointer", marginRight: "1rem" }}
          >
            {item.selected ? (
              <p onClick={(e) => handleToggleEntry(e, item)}>Deselect</p>
            ) : (
              <p onClick={(e) => handleToggleEntry(e, item)}>Select</p>
            )}
          </span>
          <span
            className="output-edit"
            style={{ cursor: "pointer", marginRight: "1rem" }}
          >
            <p onClick={(e) => handleEdit(e, item)}>Edit</p>
          </span>
          <span className="output-delete">
            {!item.orcid && (
              <p onClick={(e) => handleDelete(e, item)}>Delete</p>
            )}
          </span>
        </div>
      ))}
      <button
        type="button"
        className="forward"
        onClick={(e) => setDisplay(!display)}
      >
        Add {label}
      </button>
    </div>
  );
};

export default DisplayEntries;
