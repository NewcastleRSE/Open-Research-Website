const DisplayDigitalScholarshipInfo = ({ digitalScholarshipData, field }) => {
  return digitalScholarshipData.map((digitalScholarship, index) => {
    return (
      <div key={index} className="Results__List">
        <div className="Results__Item">
          <div>
            {field("Title", digitalScholarship.dsTitle)}
            {field("URL", digitalScholarship.dsURL)}
            {field("Embargo", digitalScholarship.dsEmbargo ? "True" : "False")}
            {field("License", digitalScholarship.dsLicense)}
          </div>
        </div>
      </div>
    );
  });
};

export default DisplayDigitalScholarshipInfo;
