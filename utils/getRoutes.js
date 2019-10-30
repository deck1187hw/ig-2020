import axios from "axios";

module.exports = async function getAppRoutes() {
  const result = await axios.get(
    "https://www.ig.com/uk/platforms-news.newsarticles.json"
  );

  const newsStories = result.data.articles.map(payload => {
    return {
      route: `/news/${encodeURIComponent(payload.url)}`,
      payload
    };
  });

  return Promise.all([newsStories]).then(values => {
    return [...values[0]];
  });
};
