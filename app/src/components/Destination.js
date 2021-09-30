import * as React from "react";

import * as apiClient from "../apiClient";

function Destinations({ currentArticleID, setCurrentArticleID }) {
  const [destinations, setDestinations] = React.useState([]);

  const loadDestinations = async (currentArticleID) => {
    setDestinations(await apiClient.getDestinations(currentArticleID));
  };

  React.useEffect(() => {
    loadDestinations(currentArticleID);
  }, []);

  const handleClose = () => {
    setCurrentArticleID("");
  };

  return (
    <div id="Destination">
      {destinations.map((destination) => (
        <div key={destination.destination_id}>
          <h2>{destination.title}</h2>
          <p>{destination.description}</p>
          <img src={destination.image_url} alt={destination.title}></img>
        </div>
      ))}
      <button onClick={(e) => handleClose()}>Close</button>
    </div>
  );
}

export default Destinations;
