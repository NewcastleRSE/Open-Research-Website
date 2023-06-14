import { useState } from "react";
import ArticleModal from "../formModals/ArticleModal";
import validate from "../../validationRules/ArticleVR";
import { v4 as uuidv4 } from "uuid";
import React from "react";

function MultipleArticle({ formData, setFormData, display, setDisplay }) {
  const [errors, setErrors] = useState({});
  const [editMode, setEditMode] = useState(false);

  const [articleInfo, setArticleInfo] = useState({
    title: "",
    url: "",
    doi: "",
    type: "",
    url: "",
    embargo: "",
    license: "",
    selected: true,
  });

  const [currArticle, setCurrArticle] = useState({}); // eslint-disable-line no-unused-vars

  const handleClick = (e) => {
    e.preventDefault();
    if (!editMode) {
      wipeArticleInfo();
    }
    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = validate(articleInfo);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (!editMode) {
        let temp = { ...articleInfo };
        temp.id = uuidv4(); // add a unique identifier
        setFormData({
          ...formData,
          Article: [...formData.Article, temp],
        });
      } else {
        const updatedArticles = formData.Article.map((i) =>
          i.id === currArticle.id ? articleInfo : i
        );
        const updatedFormData = {
          ...formData,
          Article: updatedArticles,
        };
        setFormData(updatedFormData);
      }

      wipeArticleInfo();
      setErrors({});
      setDisplay(!display);
      setEditMode(false);
    }
  };

  const wipeArticleInfo = () => {
    setArticleInfo({
      title: "",
      url: "",
      doi: "",
      type: "",
      url: "",
      embargo: "",
      license: "",
      selected: true,
    });
  };

  const handleCancel = (e) => {
    e.preventDefault();

    wipeArticleInfo();
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

    setArticleInfo({ ...article });

    setEditMode(true);
    setDisplay(!display);
  };

  const handleToggleEntry = (e, article) => {
    e.preventDefault();
    const updatedArticles = formData.Article.map((i) =>
      i.id === article.id ? { ...i, selected: !i.selected } : i
    );

    setFormData({ ...formData, Article: updatedArticles });
  };

  console.log(formData);

  return (
    <div>
      <div>
        <h2>Articles</h2>
        {formData.Article.map((article, index) => (
          <div className="output-type row" key={index}>
            <h4 className="output-title col">{article.title}</h4>
            <span
              className="output-edit"
              style={{ cursor: "pointer", marginRight: "1rem" }}
            >
              {article.selected ? (
                <p onClick={(e) => handleToggleEntry(e, article)}>Deselect</p>
              ) : (
                <p onClick={(e) => handleToggleEntry(e, article)}>Select</p>
              )}
            </span>
            <span
              className="output-edit"
              style={{ cursor: "pointer", marginRight: "1rem" }}
            >
              <p onClick={(e) => handleEdit(e, article)}>Edit</p>
            </span>
            <span className="output-delete">
              <p onClick={(e) => handleDelete(e, article)}>Delete</p>
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

      <ArticleModal
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
