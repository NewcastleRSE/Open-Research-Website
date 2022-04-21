import React from "react";

function Summary() {
  return (
    <div className="submit step">
      <h2>Summary</h2>
      <h3 className="main_question">Your Results</h3>
      <div className="summary">
        <ul>
          <li>
            <strong>1</strong>
            <h5>Tation argumentum et usu, dicit viderer evertitur te has.</h5>
            <p id="question_1"></p>
          </li>
          <li>
            <strong>2</strong>
            <h5>
              Eu dictas concludaturque usu, facete detracto patrioque an per,
              lucilius pertinacia eu vel.
            </h5>
            <p id="question_2"></p>
          </li>
          <li>
            <strong>3</strong>
            <h5>Adhuc invidunt duo ex. Eu tantas dolorum ullamcorper qui.</h5>
            <p id="question_3"></p>
            <p id="additional_message"></p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Summary;
