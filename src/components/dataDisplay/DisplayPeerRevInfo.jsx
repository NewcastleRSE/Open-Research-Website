const DisplayPeerRevInfo = ({ peerReviewData, field }) => {
  return peerReviewData.map((peerReview, index) => {
    return (
      <div key={index} className="Results__List">
        {field("Title", peerReview.peerRevTitle)}
        {field("URL", peerReview.peerRevURL)}
        {/* {field("Response", peerReview.peerRevReponse)} */}
      </div>
    );
  });
};

export default DisplayPeerRevInfo;
