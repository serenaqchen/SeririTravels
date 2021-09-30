import * as React from "react";

import * as apiClient from "../apiClient";
import ImgMediaCard from "../styles/card";

import Destinations from "./Destination";

function TravelBlog() {
  const [articles, setArticles] = React.useState([]);
  const [currentArticleID, setCurrentArticleID] = React.useState("");

  const loadArticles = async () => {
    setArticles(await apiClient.getArticles());
  };

  React.useEffect(() => {
    loadArticles();
  }, []);

  return (
    <div id="TravelBlog">
      <h1>Travel Blog</h1>
      {currentArticleID ? (
        <Destinations
          currentArticleID={currentArticleID}
          setCurrentArticleID={setCurrentArticleID}
        />
      ) : (
        <ArticleList
          articles={articles}
          setCurrentArticleID={setCurrentArticleID}
        />
      )}
    </div>
  );
}

const ArticleList = ({ articles, setCurrentArticleID, setShowDestination }) => {
  // const [destination, setdestination] = React.useState({});

  const handleReadMore = (article_id) => {
    setCurrentArticleID(article_id);
  };

  return (
    <div id="ArticleList">
      {articles.map((article) => (
        <ImgMediaCard
          article_id={article.article_id}
          title={article.title}
          overview={article.overview}
          timestamp={article.timestamp}
          location={article.country}
          image_url={article.image_url}
          fxn={handleReadMore}
        />
      ))}
      {/* {articles.map((article) => (
        <div key={article.article_id}>
          <img src={article.image_url} alt={article.country}></img>
          <div>
            <h2>{article.title}</h2>
            <p>{article.timestamp}</p>
            <p>{article.overview}</p>
            <p>Location: {article.country}</p>
            <button onClick={(e) => handleReadMore(article.article_id)}>
              <a href="#Destination">Read More</a>
            </button>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default TravelBlog;
