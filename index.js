const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

const url = "https://www.theguardian.com/uk";

axios(url).then((response) => {
  const $ = cheerio.load(response.data);
  const articles = [];

  $("article").each((i, element) => {
    const title = $(element);
    const link = $(element);
    articles.push({
      title: title.text(),
      link: link.attr("href"),
    });
    console.log(articles);
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
