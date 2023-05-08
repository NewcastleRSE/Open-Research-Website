const DisplayDigitalScholarshipInfo = ({ digitalScholarshipData, field }) => {
  return digitalScholarshipData.map((digitalScholarship, index) => {
    return (
      <div key={index} className="Results__List">
        {field("Title", digitalScholarship.dsTitle)}
        {field("URL", digitalScholarship.dsURL)}
        {field("Embargo", digitalScholarship.dsEmbargo)}
        {field("License", digitalScholarship.dsLicense)}
      </div>
    );
  });
};

export default DisplayDigitalScholarshipInfo;
