import React from "react";
const ProtocolHelp = ({}) => {
  return (
    <div className="text-help">
      <p className="paragraph">
        A protocol describes a formal or official record of scientific
        experimental observations in a structured format should be made freely
        available in an open repository that facilitates the sharing, editing,
        forking (copying and adopting/modifying), and further development.
        Understanding the starting point for work—including assumptions—along
        with the final study and analysis can provide guidance to other
        researchers as to additional research avenues to explore. These include
        study protocols (description of the study plan), and laboratory
        protocols (detailed description of experimental methods). They can
        convey exactly what was done and the decisions/compromises that were
        made on route to a scientific discovery.
      </p>

      <p className="paragraph">References: </p>
      <p className="reference">
        National Academies of Sciences, Engineering, and Medicine 2021.
        Developing a Toolkit for Fostering Open Science Practices: Proceedings
        of a Workshop. Washington, DC: The National Academies Press.
        <a href="https://doi.org/10.17226/26308"></a>
      </p>
      <p className="reference">
        <a href="https://www.fosteropenscience.eu/content/open-science-training-handbook">
          Open Science Training Handbook
        </a>
        , Bezjak et al., (2018){" "}
        <a href="https://book.fosteropenscience.eu/">
          https://book.fosteropenscience.eu/
        </a>
      </p>
    </div>
  );
};

export default ProtocolHelp;
