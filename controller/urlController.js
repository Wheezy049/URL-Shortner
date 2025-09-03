const { nanoid } = require("nanoid");
const Url = require("../model/Url");

let urlDatabase = {};

async function shortenUrl(req, res) {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.status(400).json({ error: "Original URL is required" });
  }

  const shortenId = nanoid(6);

  try {
    const newUrl = new Url({
      shortenId: shortenId,
      originalUrl,
    });

    await newUrl.save();

    res.json({
      shortenUrl: `http://localhost:8000/api/url/${shortenId}`,
      originalUrl,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function redirectShortenUrl(req, res) {
  const { shortenId } = req.params;

  try {
    const url = await Url.findOne({ shortenId });

    if (!url) {
      return res.status(404).json({ error: "URL not found" });
    }

    await url.save();

    res.redirect(url.originalUrl);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = {
  shortenUrl,
  redirectShortenUrl,
};
