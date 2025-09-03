const express = require("express");
const {
  shortenUrl,
  redirectShortenUrl,
} = require("../controller/urlController");

const urlRouter = express.Router();

// shorten url
urlRouter.post("/shorten", shortenUrl);

// redirect url
urlRouter.get("/:shortenId", redirectShortenUrl);

module.exports = urlRouter;
