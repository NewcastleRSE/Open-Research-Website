import React from "react";

const manageDataDisplay = (infoFields) => {
  return ({ data, field }) => {
    return data.map((item, index) => (
      <div key={index} className="Results__List">
        {infoFields.map(({ label, prop }) => field(label, item[prop]))}
      </div>
    ));
  };
};

export default manageDataDisplay;
