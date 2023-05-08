import React from "react";
const PeerReviewHelp = ({}) => {
  return (
    <div className="text-help">
      <p className="paragraph">
        Open peer review two main traits are “open identities”, where both
        authors and reviewers are aware of each other’s identities (i.e.,
        non-blinded), and “open reports”, where review reports are published
        alongside the relevant article. These traits can be combined, but need
        not be, and may be complemented by other innovations, such as “open
        participation”, where members of the wider community are able to
        contribute to the review process, “open interaction”, where direct
        reciprocal discussion between author(s) and reviewers, and/or between
        reviewers, is allowed and encouraged, and “open pre-review manuscripts”,
        where manuscripts are made immediately available in advance of any
        formal peer review procedures (either internally as part of journal
        workflows or externally via preprint servers).
      </p>

      <p className="paragraph">
        References:
        <ul className="bulletpoints">
          <li className="bulletpoint">
            Ross-Hellauer T. What is open peer review? A systematic review
            [version 2; peer review: 4 approved]. F1000Research 2017, 6:588{" "}
            <a href="https://doi.org/10.12688/f1000research.11369.2">
              (https://doi.org/10.12688/f1000research.11369.2).
            </a>
          </li>
          <li className="bulletpoint">
            <a href="https://www.fosteropenscience.eu/content/open-science-training-handbook">
              Open Science Training Handbook
            </a>
            , Bezjak et al., (2018){" "}
            <a href="https://book.fosteropenscience.eu/">
              (https://book.fosteropenscience.eu/).
            </a>
          </li>
        </ul>
      </p>
    </div>
  );
};

export default PeerReviewHelp;
