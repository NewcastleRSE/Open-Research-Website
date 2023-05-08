import React, { useState, useEffect } from "react";
import generateFeedback from "../../util/generateFeedback";

function Summary({ formData }) {
  const [feedback, setFeedback] = useState("");
  console.log(formData);

  useEffect(() => {
    setFeedback(generateFeedback(formData));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="submit step">
      <h2>Summary</h2>
      <h3 className="main_question">Your Feedback</h3>
      <div className="summary">
        <p>{feedback}</p>
      </div>
    </div>
  );
}

export default Summary;
