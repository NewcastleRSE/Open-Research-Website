const FormDataDisplay = ({ formData }) => {
  const displayArticleInfo = (articles) => {
    console.log(articles);
    return articles.map((article, index) => {
      return (
        <div key={index} className="Results__List">
          <div className="Results__Item">
            <div>
              <h6>{`Article ${index + 1}`}</h6>
              <div className="Results__Item">
                <div className="Results__Label">Title:</div>
                <div className="Results__Value">{article.articleURL}</div>
              </div>

              <div className="Results__Item">
                <div className="Results__Label">URL:</div>
                <div className="Results__Value">{article.articleURL}</div>
              </div>

              <div className="Results__Item">
                <div className="Results__Label">DOI:</div>
                <div className="Results__Value">{article.articleDOI}</div>
              </div>

              <div className="Results__Item">
                <div className="Results__Label">Embargo:</div>
                <div className="Results__Value">
                  {article.articleEmbargo ? "False" : "True"}
                </div>
              </div>

              <div className="Results__Item">
                <div className="Results__Label">License:</div>
                <div className="Results__Value">{article.articleLicense}</div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="Results__Container">
      {/** Researcher Form Display */}
      {formData.Researcher && (
        <div className="Results__SubContainer">
          <h1 className="Results__Title">Researcher Details</h1>
          <div className="Results__List">
            {formData.Researcher.fullName && (
              <div className="Results__Item">
                <div className="Results__Label">Name:</div>
                <div className="Results__Value">
                  {formData.Researcher.fullName}
                </div>
              </div>
            )}
            {formData.Researcher.faculty && (
              <div className="Results__Item">
                <div className="Results__Label">Faculty:</div>
                <div className="Results__Value">
                  {formData.Researcher.faculty}
                </div>
              </div>
            )}
            {formData.Researcher.school && (
              <div className="Results__Item">
                <div className="Results__Label">School:</div>
                <div className="Results__Value">
                  {formData.Researcher.school}
                </div>
              </div>
            )}
            {formData.Researcher.otherSchool && (
              <div className="Results__Item">
                <div className="Results__Label">School:</div>
                <div className="Results__Value">
                  {formData.Researcher.otherSchool}
                </div>
              </div>
            )}
            {formData.Researcher.careerStage && (
              <div className="Results__Item">
                <div className="Results__Label">Career Stage:</div>
                <div className="Results__Value">
                  {formData.Researcher.careerStage}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {/** Project Form Display */}
      {formData.Project.projectName && (
        <div className="Results__SubContainer">
          <h1 className="Results__Title">Project Details</h1>
          <div className="Results__List">
            {formData.Project.projectName && (
              <div className="Results__Item">
                <div className="Results__Label">Project Name:</div>
                <div className="Results__Value">
                  {formData.Project.projectName}
                </div>
              </div>
            )}
            {formData.Project.researchArea && (
              <div className="Results__Item">
                <div className="Results__Label">Researcher Area:</div>
                <div className="Results__Value">
                  {formData.Project.researchArea}
                </div>
              </div>
            )}
            {formData.Project.funder && (
              <div className="Results__Item">
                <div className="Results__Label">Funder:</div>
                <div className="Results__Value">{formData.Project.funder}</div>
              </div>
            )}
            {formData.Project.otherFunder && (
              <div className="Results__Item">
                <div className="Results__Label">Other Funder:</div>
                <div className="Results__Value">
                  {formData.Project.otherFunder}
                </div>
              </div>
            )}
            {formData.Project.length && (
              <div className="Results__Item">
                <div className="Results__Label">Length(m):</div>
                <div className="Results__Value">{formData.Project.length}</div>
              </div>
            )}
          </div>
        </div>
      )}
      {formData.Article[0] && (
        <div className="Results__SubContainer">
          <h1 className="Results__Title">Article Details</h1>
          {/** Will put the articles in rows of two if they fit evenly and rows of three if not. */}
          {console.log(formData.Article.length)}
          <div
            className={
              formData.Article.length % 2 == 0
                ? "two-column-grid"
                : "three-column-grid"
            }
          >
            {displayArticleInfo(formData.Article)}
          </div>
        </div>
      )}
      {/** End */}
    </div>
  );
};

export default FormDataDisplay;
