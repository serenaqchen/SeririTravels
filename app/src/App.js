import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import NewBlogPost from "./components/NewBlogPost";
import TravelBlog from "./components/TravelBlog";

import "./App.css";

const App = () => (
  <>
    <main>
      <nav>
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          Seriri Travels
        </Link>
        <div id="otherRoutes">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="travelBlog"
          >
            Travel Blog
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="newBlogPost"
          >
            + New Blog Post
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travelBlog" element={<TravelBlog />} />
        <Route path="/newBlogPost" element={<NewBlogPost />} />
      </Routes>
    </main>
  </>
);

const Home = () => {
  return (
    <div id="home">
      <img src="https://www.beachaddicted.com/wordpresss-beachaddicted/wp-content/uploads/2020/04/trujilloc-1.jpg"></img>
    </div>
  );
};

export default App;
