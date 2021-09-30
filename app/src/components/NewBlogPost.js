import * as React from "react";

import * as apiClient from "../apiClient";

import CountryForm from "./CountryForm";
import DestinationForm from "./DestinationForm";

function NewBlogPost() {
  const [showDestinationForm, setshowDestinationForm] = React.useState(false);
  const [showCountryForm, setshowCountryForm] = React.useState(true);
  const [articles, setArticles] = React.useState([]);

  const loadArticles = async () => {
    setArticles(await apiClient.getArticles());
  };

  React.useEffect(() => {
    loadArticles();
  }, []);

  return (
    <div>
      <h1>New Blog Post</h1>
      {showCountryForm && (
        <CountryForm
          setshowDestinationForm={setshowDestinationForm}
          setshowCountryForm={setshowCountryForm}
        />
      )}
      {showDestinationForm && (
        <DestinationForm
          articles={articles}
          setshowDestinationForm={setshowDestinationForm}
          setshowCountryForm={setshowCountryForm}
        />
      )}
    </div>
  );
}

export default NewBlogPost;
