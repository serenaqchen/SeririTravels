import express from "express";

import * as db from "./db.mjs";

const destinationRouter = express.Router();

destinationRouter.get("/:article_id", async (request, response) => {
  const article_id = request.params.article_id
  const destinations = await db.getDestinations(article_id);
  response.json(destinations);
});

destinationRouter.use(express.json());
destinationRouter.post("/:article_id", async (request, response) => {
  const destination = await db.addDestination(request.body);
  response.status(201).json(destination);
});

export default destinationRouter;