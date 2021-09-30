import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getTasks = () => db.any("SELECT * FROM tasks");

export const addTask = (name) =>
  db.one("INSERT INTO tasks(name) VALUES(${name}) RETURNING *", { name });

export const getArticles = () =>
  db.any("SELECT * FROM articles ORDER BY timestamp ASC");
export const getDestinations = (article_id) =>
  db.any("SELECT * FROM destinations WHERE article_id = $1", [article_id]);

export const addArticle = (formdata) =>
  db.any(
    "INSERT INTO articles (title, overview, country, image_url) VALUES($1, $2, $3, $4) RETURNING *",
    [formdata.title, formdata.overview, formdata.country, formdata.image_url],
  );
export const addDestination = (formdata) =>
  db.any(
    "INSERT INTO destinations (article_id, title, description, city, image_url) VALUES($1, $2, $3, $4, $5) RETURNING *",
    [formdata.article_id, formdata.title, formdata.description, formdata.city, formdata.image_url],
  );

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: "../.env" });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
