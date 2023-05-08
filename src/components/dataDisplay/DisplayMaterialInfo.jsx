const DisplayMaterialInfo = ({ materialData, field }) => {
  return materialData.map((material, index) => {
    return (
      <div key={index} className="Results__List">
        {field("Title", material.materialTitle)}
        {field("URL", material.materialURL)}
      </div>
    );
  });
};

export default DisplayMaterialInfo;
