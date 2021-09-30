export const getTasks = () => _get("/api/tasks");

export const addTask = (name) => _post("/api/tasks", { name });

export const getArticles = () => _get("/api/articles");

export const getDestinations = (article_id) =>
  _get(`/api/destinations/${article_id}`);

export const addCountry = (formdata) => _post("/api/articles", formdata);

export const addDestination = (formdata) =>
  _post(`/api/destinations/${formdata.article_id}`, formdata);

const _get = async (url) => (await fetch(url)).json();

const _post = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let result;
  try {
    result = await response.json();
  } catch {}

  return result;
};
