const ArticleHelp = ({}) => {
  return (
    <div className="help-text">
      <p className="paragraph">
        Open Access to publications means that research publications like
        articles can be accessed online, free of charge by any user, with no
        technical obstacles (such as mandatory registration or login to specific
        platforms). At the very least, such publications can be read online,
        downloaded and printed. Ideally, additional rights such as the right to
        copy, distribute, search, link, crawl and mine should also be provided.
      </p>
      <p className="paragraph">
        Open Access can be realised through two main non-exclusive routes: Green
        Open Access (self-archiving):
      </p>
      <ul className="bulletpoints">
        <li className="bulletpoint">
          The published work or the final peer-reviewed manuscript that has been
          accepted for publication is made freely and openly accessible by the
          author, or a representative, in an online repository. Some publishers
          request that Open Access be granted only after an embargo period has
          elapsed. This embargo period can last anywhere between several months
          and several years. For publications that have been deposited in a
          repository but are under embargo, usually at least the metadata are
          openly accessible.{" "}
        </li>
        <li className="bulletpoint">
          Gold Open Access (Open Access publishing): The published work is made
          available in Open Access mode by the publisher immediately upon
          publication. The most common business model is based on one-off
          payments by authors (commonly called APCs – article processing charges
          – or BPCs – book processing charges). Where Open Access content is
          combined with content that requires a subscription or purchase, in
          particular in the context of journals, conference proceedings and
          edited volumes, this is called hybrid Open Access.
        </li>
      </ul>
      <p className="reference">
        Reference:{" "}
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

export default ArticleHelp;
