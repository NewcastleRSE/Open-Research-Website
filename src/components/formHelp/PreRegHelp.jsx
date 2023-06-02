import React from "react";
const PreRegHelp = ({}) => {
  return (
    <div className="help-text">
      <p className="paragraph">
        Submitting a statistical analysis plan to a registry prior to conducting
        the work (i.e., preregistering with an analysis plan) the scientist
        makes a clearer distinction between planned hypothesis tests (i.e.,
        confirmatory tests) and unplanned discovery research (i.e., screening or
        exploratory research). The analysis plan provides constraint to specify
        how the data will be used to confront the research questions.
      </p>
      <p className="paragraph">References:</p>
      <ul className="bulletpoints">
        <li className="bulletpoint">
          National Academies of Sciences, Engineering, and Medicine 2021.
          Developing a Toolkit for Fostering Open Science Practices: Proceedings
          of a Workshop. Washington, DC: The National Academies Press.{" "}
          <a href="https://doi.org/10.17226/26308">
            https://doi.org/10.17226/26308.
          </a>
        </li>
        <li className="bulletpoint">
          Nosek et al., (2018).{" "}
          <a href="https://www.pnas.org/doi/full/10.1073/pnas.1708274114">
            ‘The preregistration revolution’
          </a>
          , Proc. Natl. Acad. Sci. Unit. States Am., 115 (2018), pp. 2600-2606.
        </li>
      </ul>
    </div>
  );
};

export default PreRegHelp;
