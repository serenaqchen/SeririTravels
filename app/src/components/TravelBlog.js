import * as React from "react";

import * as apiClient from "../apiClient";

function TravelBlog() {
  const [articles, setArticles] = React.useState([]);

  const loadArticles = async () => {
    setArticles(await apiClient.getArticles());
    console.log(articles);
  };

  React.useEffect(() => {
    loadArticles();
  }, []);

  return (
    <div>
      <h1>Travel Blog</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

const ArticleList = ({ articles }) => (
  <div>
    {articles.map((article) => (
      <div key={article.article_id}>
        <img src={article.image_url} alt={article.country}></img>
        <div>
          <h2>{article.title}</h2>
          <p>{article.timestamp}</p>
          <p>Location: {article.country}</p>
        </div>
      </div>
    ))}
  </div>
);

export default TravelBlog;
