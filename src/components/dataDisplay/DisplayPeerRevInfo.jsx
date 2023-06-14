import React from "react";
const DisplayPeerRevInfo = ({ peerReviewData, field }) => {
  return peerReviewData.map((peerReview, index) => {
    return (
      <div key={index} className="Results__List">
        {field("Title", peerReview.title)}
        {field("URL", peerReview.url)}
        {/* {field("Response", peerReview.peerRevReponse)} */}
      </div>
    );
  });
};

export default DisplayPeerRevInfo;
