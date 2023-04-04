import React, { useState } from "react";

import Article from "../forms/Article";
import validate from "../../validationRules/ArticleVR";
import str2bool from "../../util/str2bool";

function MultipleArticle({ formData, setFormData, display, setDisplay }) {
  const [errors, setErrors] = useState({});

  const [articleInfo, setArticleInfo] = useState({
    articleTitle: "",
    articleURL: "",
    articleDOI: "",
    articleEmbargo: false,
    articleLicense: "",
  });

  const [currArticle, setCurrArticle] = useState({}); // eslint-disable-line no-unused-vars

  const handleClick = (e) => {
    e.preventDefault();

    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(articleInfo);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Passing validation
      articleInfo.articleEmbargo = str2bool(articleInfo.articleEmbargo);

      formData.Article.push(articleInfo);

      setArticleInfo({
        articleTitle: "",
        articleURL: "",
        articleDOI: "",
        articleEmbargo: false,
        articleLicense: "",
      });

      setErrors({});
      setDisplay(!display);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setArticleInfo({
      articleTitle: "",
      articleURL: "",
      articleDOI: "",
      articleEmbargo: false,
      articleLicense: "",
    });

    setErrors({});
    setDisplay(!display);
  };

  const handleDelete = (e, article) => {
    e.preventDefault();

    let filteredArray = formData.Article.filter((item) => item !== article);

    setFormData({ ...formData, Article: filteredArray });
  };

  const handleEdit = (e, article) => {
    e.preventDefault();

    setCurrArticle(article);

    setArticleInfo({
      articleTitle: article.articleTitle,
      articleURL: article.articleURL,
      articleDOI: article.articleDOI,
      articleEmbargo: article.articleEmbargo,
      articleLicense: article.articleLicense,
    });

    let filteredArray = formData.Article.filter((item) => item !== article);

    setFormData({ ...formData, Article: filteredArray });

    setDisplay(!display);
  };

  return (
    <div>
      <div>
        <h2>Articles</h2>
        {formData.Article.map((article, index) => (
          <div className="output-type row" key={index}>
            <h4 className="output-title col">{article.articleTitle}</h4>
            <span
              className="output-edit"
              style={{ cursor: "pointer", marginRight: "1rem" }}
            >
              <p onClick={(e) => handleEdit(e, article)}>Edit</p>
            </span>
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
        handleCancel={handleCancel}
        errors={errors}
      />
    </div>
  );
}

export default MultipleArticle;
