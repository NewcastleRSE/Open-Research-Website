const DisplayPeerRevInfo = ({ peerReviewData, field }) => {
  return peerReviewData.map((peerReview, index) => {
    return (
      <div key={index} className="Results__List">
        <div className="Results__Item">
          <div>
            <h6>{`Peer Review ${index + 1}`}</h6>
            {field("Title", peerReview.peerRevTitle)}
            {field("URL", peerReview.peerRevURL)}
            {field("Response", peerReview.peerRevReponse)}
          </div>
        </div>
      </div>
    );
  });
};

export default DisplayPeerRevInfo;
