import { useState } from "react";
import ArticleModal from "../formModals/ArticleModal";
import validate from "../../validationRules/ArticleVR";

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

    // checking for errors
    if (Object.keys(newErrors).length === 0) {
      // this line of code below was making it so the boolean value wasn't saved when editing the article. not sure how it impacts the rest of the code but it's working fine for now.
      // articleInfo.articleEmbargo = str2bool(articleInfo.articleEmbargo);
      if (!editMode) {
        formData.Article.push(articleInfo);
      } else {
        const updatedArticles = formData.Article.map((i) =>
          JSON.stringify(i) === JSON.stringify(currArticle) ? articleInfo : i
        );
        const updatedFormData = {
          ...formData,
          Article: updatedArticles,
        };
        setFormData(updatedFormData);
      }

      setCurrArticle(articleInfo);
      wipeArticleInfo();
      setErrors({});
      setDisplay(!display);
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

    setArticleInfo({
      articleTitle: currArticle.articleTitle,
      articleURL: currArticle.articleURL,
      articleDOI: currArticle.articleDOI,
      articleEmbargo: currArticle.articleEmbargo,
      articleLicense: currArticle.articleLicense,
    });

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
