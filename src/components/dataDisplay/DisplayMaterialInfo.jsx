import React from "react";

const DisplayMaterialInfo = ({ materialData, field }) => {
  return materialData.map((material, index) => {
    return (
      <div key={index} className="Results__List">
        {field("Title", material.title)}
        {field("URL", material.url)}
      </div>
    );
  });
};

export default DisplayMaterialInfo;
