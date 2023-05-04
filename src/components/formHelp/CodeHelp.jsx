const CodeHelp = ({}) => {
  return (
    <div className="help-text">
      <p className="paragraph">
        Modern research relies on software, and building upon—or
        reproducing—that research requires access to the full source code behind
        that software
        <a href="https://www.nature.com/articles/s41559-017-0160">
          (Lowndes et al., 2017).
        </a>
      </p>
      <p className="paragraph">
        pen research software, or open-source research software, refers to the
        use('and') development of software for analysis, simulation,
        visualization, etc. where the full source code is available. In
        addition, according to the Open-Source Definition, open-source software
        must be distributed in source and/or compiled form (with the source code
        available in the latter case) and must be shared under a license that
        allows modification, derivation, and redistribution. Furthermore, many
        (if not most) software programs may contain some undetected errors{" "}
        <a href="https://f1000research.com/articles/3-303">(Soergel, 2015)</a>,
        so even a "perfect" written description of software would not be able to
        account for all results.
      </p>
      <p className="reference">
        Reference:{" "}
        <a href="https://www.fosteropenscience.eu/content/open-science-training-handbook">
          Open Science Training Handbook
        </a>
        , Bezjak et al., (2018)
        <a href="https://book.fosteropenscience.eu/">
          (https://book.fosteropenscience.eu/)
        </a>
      </p>
    </div>
  );
};

export default CodeHelp;
