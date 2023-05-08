import React from "react";

function StepCounter(props) {
  return (
    <div>
      <strong className="step-counter">
        Page {props.page + 1}/{props.form.length}
      </strong>
    </div>
  );
}

export default StepCounter;
