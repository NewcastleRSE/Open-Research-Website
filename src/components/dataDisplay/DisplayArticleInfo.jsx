import React from "react";

const DisplayArticleInfo = ({ articleData, field }) => {
  return articleData.map((article, index) => {
    return (
      <div key={index} className="Results__List">
        {field("Title", article.title)}
        {field("URL", article.url)}
        {field("DOI", article.doi)}
        {field("Embargo", article.embargo)}
        {field("License", article.license)}
      </div>
    );
  });
};

export default DisplayArticleInfo;
