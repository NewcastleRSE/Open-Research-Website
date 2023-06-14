import React from "react";

const DisplayDigitalScholarshipInfo = ({ digitalScholarshipData, field }) => {
  return digitalScholarshipData.map((digitalScholarship, index) => {
    return (
      <div key={index} className="Results__List">
        {field("Title", digitalScholarship.title)}
        {field("URL", digitalScholarship.url)}
        {field("Embargo", digitalScholarship.embargo)}
        {field("License", digitalScholarship.license)}
      </div>
    );
  });
};

export default DisplayDigitalScholarshipInfo;
