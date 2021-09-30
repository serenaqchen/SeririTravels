import express from "express";

import * as db from "./db.mjs";

const articleRouter = express.Router();

articleRouter.get("/", async (request, response) => {
  const articles = await db.getArticles();
  response.json(articles);
});

articleRouter.use(express.json());
articleRouter.post("/", async (request, response) => {
  const article = await db.addArticle(request.body);
  response.status(201).json(article);
});

export default articleRouter;
