const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  shortenId: {
    type: String,
    required: true,
    unique: true,
  },
  originalUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
