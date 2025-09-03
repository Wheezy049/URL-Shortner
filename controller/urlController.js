const { nanoid } = require("nanoid");

let urlDatabase = {};

function shortenUrl(req, res){

const { originalUrl } = req.body;

if(!originalUrl){
    return res.status(400).json({error: "Original URL is required"})
}

const shortenId = nanoid(6);
urlDatabase[shortenId] = originalUrl;

res.json({
    shortenUrl: `http://localhost:8000/api/url/${shortenId}`,
    originalUrl
})
   
}

function redirectShortenUrl(req, res){
  const { shortenId } = req.params;
  const originalUrl = urlDatabase[shortenId];

  if(!originalUrl){
    return res.status(404).json({error: "URL not found"});
  }

  res.redirect(originalUrl);
}


module.exports = {
    shortenUrl,
    redirectShortenUrl
}