import React, { useState } from "react";
import validator from "validator";

import Article from "../forms/Article";

function MultipleArticle({ formData, setFormData }) {
  const [display, setDisplay] = useState(false);

  const [error, setError] = useState(false);

  const [articleInfo, setArticleInfo] = useState({
    articleURL: "",
    articleDOI: "",
    articleEmbargo: false,
    articleLicence: "",
  });

  const handleClick = (e) => {
    e.preventDefault();

    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validator.isEmpty(articleInfo.articleURL)) {
      // Failing validation
      setError(true);
    } else {
      // Passing validation
      formData.articles.push(articleInfo);

      setArticleInfo({
        articleURL: "",
        articleDOI: "",
        articleEmbargo: false,
        articleLicence: "",
      });

      setError(false);
      setDisplay(!display);
    }
  };

  const handleDelete = (e, article) => {
    e.preventDefault();

    let filteredArray = formData.articles.filter((item) => item !== article);

    setFormData({ ...formData, articles: filteredArray });
  };

  return (
    <div>
      <div>
        <h2>Articles</h2>
        {formData.articles.map((article) => (
          <div className="output-type row">
            <h4 className="output-title col">{article.articleURL}</h4>
            <span className="output-delete">
              <p onClick={(e) => handleDelete(e, article)}>Remove</p>
            </span>
          </div>
        ))}
        <button
          type="button"
          className="forward"
          onClick={(e) => handleClick(e)}
        >
          Add Article
        </button>
      </div>

      <Article
        show={display}
        formData={articleInfo}
        setFormData={setArticleInfo}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        error={error}
      />
    </div>
  );
}

export default MultipleArticle;
