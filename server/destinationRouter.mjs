import express from "express";

import * as db from "./db.mjs";

const destinationRouter = express.Router();

destinationRouter.get("/", async (request, response) => {
  const destinations = await db.getDestinations();
  response.json(destinations);
});

// destinationRouter.use(express.json());
// destinationRouter.post("/", async (request, response) => {
//   const destination = await db.addDestination(request.body.name);
//   response.status(201).json(destination);
// });

export default destinationRouter;