import React from "react";
const DatasetHelp = ({}) => {
  return (
    <div className="help-text">
      <p className="paragraph">
        Open research data can be freely accessed, reused, remixed and
        redistributed, for academic research and teaching purposes and beyond.
        Ideally, open data have no restrictions on reuse or redistribution, and
        are appropriately licensed as such. In exceptional cases, e.g. to
        protect the identity of human subjects, special or limited restrictions
        of access are set. Openly sharing data facilitates reuse, forming the
        basis for research verification and reproducibility, and opens up a
        pathway to wider collaboration.
      </p>
      <p className="paragraph">
        Data should be archived into a repository with supporting documenting to
        ensure the data is assigned a persistent identifier (e.g. DOI) and
        preserved for at least ten years.
      </p>
      <p className="reference">
        Reference:{" "}
        <a href="https://www.fosteropenscience.eu/content/open-science-training-handbook">
          Open Science Training Handbook
        </a>
        , Bezjak et al., (2018){" "}
        <a href="https://book.fosteropenscience.eu">
          https://book.fosteropenscience.eu/
        </a>
      </p>
    </div>
  );
};

export default DatasetHelp;
