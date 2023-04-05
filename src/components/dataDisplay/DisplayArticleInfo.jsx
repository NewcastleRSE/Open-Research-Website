const DisplayArticleInfo = ({ articleData, field }) => {
  return articleData.map((article, index) => {
    return (
      <div key={index} className="Results__List">
        <div className="Results__Item">
          <div>
            <h6>{`Article ${index + 1}`}</h6>
            {field("Title", article.articleTitle)}
            {field("URL", article.articleURL)}
            {field("DOI", article.articleDOI)}
            {field("Embargo", article.articleEmbargo ? "False" : "True")}
            {field("License", article.articleLicense)}
          </div>
        </div>
      </div>
    );
  });
};

export default DisplayArticleInfo;
