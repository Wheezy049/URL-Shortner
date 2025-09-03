const mongoose = require("mongoose");

const mongoDBUri = process.env.MONGODB_URI;

async function connectToDatabase() {
  try {
    await mongoose.connect(mongoDBUri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}

mongoose.connection.on("error", () => {
  console.error("MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Disconnected");
});

module.exports = connectToDatabase;
