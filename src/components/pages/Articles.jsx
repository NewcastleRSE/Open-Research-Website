import { useState } from "react";
import ArticleModal from "../formModals/ArticleModal";
import validate from "../../validationRules/ArticleVR";
import { v4 as uuidv4 } from "uuid";

function MultipleArticle({ formData, setFormData, display, setDisplay }) {
  const [errors, setErrors] = useState({});
  const [editMode, setEditMode] = useState(false);

  const [articleInfo, setArticleInfo] = useState({
    articleTitle: "",
    articleURL: "",
    articleDOI: "",
    articleEmbargo: "",
    articleLicense: "",
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
        setFormData({
          ...formData,
          Article: [
            ...formData.Article,
            { ...articleInfo, id: uuidv4() }, // Add a unique ID
          ],
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
      articleTitle: "",
      articleURL: "",
      articleDOI: "",
      articleEmbargo: "",
      articleLicense: "",
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
