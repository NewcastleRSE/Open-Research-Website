import React, { useState } from "react";
import validator from "validator";

import Article from "../forms/Article";
import validate from "../../validationRules/ArticleVR";

function MultipleArticle({ formData, setFormData }) {
  const [display, setDisplay] = useState(false);

  const [errors, setErrors] = useState({});

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

    let newErrors = validate(articleInfo);
    setErrors(newErrors);

    if (
      !newErrors.URL &&
      !newErrors.DOI &&
      !newErrors.licence &&
      !newErrors.embargo
    ) {
      // Passing validation
      formData.articles.push(articleInfo);

      setArticleInfo({
        articleURL: "",
        articleDOI: "",
        articleEmbargo: false,
        articleLicence: "",
      });

      setErrors({});
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
        errors={errors}
      />
    </div>
  );
}

export default MultipleArticle;
