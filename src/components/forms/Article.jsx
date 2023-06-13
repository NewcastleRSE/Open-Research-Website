import React from "react";
import UrlInput from "../formElements/UrlInput";
import TextInput from "../formElements/TextInput";
import BooleanInput from "../formElements/BooleanInput";
import ModalButtons from "../formElements/ModalButtons";
import Dropdown from "../formElements/DropDown";

const Article = ({
  formData,
  setFormData,
  handleCancel,
  handleSubmit,
  errors,
}) => {
  return (
    <>
      <h3 className="main_question">
        Please fill with your details about your article
      </h3>
      <TextInput
        name="articleTitle"
        placeholder="Article Title"
        value={formData.title}
        onChange={(event) => {
          setFormData({ ...formData, title: event.target.value });
        }}
        error={errors.title}
      />
      <UrlInput
        name="articleURL"
        placeholder="Article URL"
        value={formData.url}
        onChange={(event) => {
          setFormData({ ...formData, url: event.target.value });
        }}
        error={errors.URL}
      />
      <TextInput
        name="articleDOI"
        placeholder="Article DOI"
        value={formData.doi}
        onChange={(event) => {
          setFormData({ ...formData, doi: event.target.value });
        }}
        error={errors.DOI}
      />
      <Dropdown
        name="article-type"
        placeholder={formData.type ? formData.type : "Type"}
        options={[
          { value: "Newspaper Article" },
          { value: "Journal Article" },
          { value: "Journal Issue" },
          { value: "Magazine Article" },
        ]}
        value={formData.type}
        onChange={(event) => {
          setFormData({ ...formData, type: event.target.value });
        }}
        id="article-type"
      />
      <TextInput
        name="articleLicense"
        placeholder="License"
        value={formData.license}
        onChange={(event) => {
          setFormData({ ...formData, license: event.target.value });
        }}
        error={errors.license}
      />
      <BooleanInput
        name="articleEmargo"
        label="Was there an embargo period?"
        a="Yes"
        b="No"
        value={formData.embargo}
        onChange={(event) => {
          setFormData({ ...formData, embargo: event.target.value });
        }}
        error={errors.embargo}
      />
      <ModalButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />
    </>
  );
};

export default Article;
