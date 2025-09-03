require("dotenv").config();

const express = require("express");
const path = require("path");
const urlRoutes = require("./routes/url");
const connectToDatabase = require("./services/mongo");

const PORT = 8000;

const app = express();

// parse json
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//     res.send("You are welcome!")
// })

app.use("/api/url", urlRoutes);

async function startServer() {
  try {
    await connectToDatabase();

    app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
}

startServer();
