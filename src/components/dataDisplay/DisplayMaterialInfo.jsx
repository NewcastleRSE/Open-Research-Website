const DisplayMaterialInfo = ({ materialData, field }) => {
  return materialData.map((material, index) => {
    return (
      <div key={index} className="Results__List">
        <div className="Results__Item">
          <div>
            <h6>{`Research Materials ${index + 1}`}</h6>
            {field("Title", material.materialTitle)}
            {field("URL", material.materialURL)}
          </div>
        </div>
      </div>
    );
  });
};

export default DisplayMaterialInfo;
