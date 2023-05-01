const DisplayArticleInfo = ({ articleData, field }) => {
  return articleData.map((article, index) => {
    return (
      <div key={index} className="Results__List">
        {field("Title", article.articleTitle)}
        {field("URL", article.articleURL)}
        {field("DOI", article.articleDOI)}
        {field("Embargo", article.articleEmbargo)}
        {field("License", article.articleLicense)}
      </div>
    );
  });
};

export default DisplayArticleInfo;
