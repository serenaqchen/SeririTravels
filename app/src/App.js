import * as React from "react";

import { Carousel } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";

import TravelBlog from "./components/TravelBlog";

import "./App.css";

const App = () => (
  <>
    <nav>
      <Link to="/">Seriri Travels</Link> |
      <Link to="travelBlog">Travel Blog</Link> |{" "}
      <Link to="newBlogPost">+ New Blog Post</Link>
    </nav>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travelBlog" element={<Home />} />
        <Route path="/newBlogPost" element={<Dashboard />} />
      </Routes>
    </main>
  </>
);

const Home = () => {
  return (
    <>
      <h1>Seriri Travels</h1>
      <Carousel>
        <Carousel.Item>
          <div className="cropped">
            <img
              className="d-block w-100"
              src="https://foodtank.com/wp-content/uploads/2020/10/Food-Tank_NorthKoreanRestaurants-Defectors-ComfortSeoulFoodSecurity.jpg"
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="cropped">
            <img
              className="d-block w-100"
              src="https://media.architecturaldigest.com/photos/589b71d07713e23d62084b27/16:9/w_2560%2Cc_limit/GettyImages-508260133.jpg"
            />
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="cropped">
            <img
              className="d-block w-100"
              src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg"
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <TravelBlog />
    </>
  );
};

const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
  </>
);

export default App;
