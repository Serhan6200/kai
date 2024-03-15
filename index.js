const express = require("express");
const mongoose = require("mongoose");
const postRoutes = require("./routes/post.routes");
const config = require("./config/config");

const app = express();

app.use(express.json());

mongoose
  .connect(config.dbConnection)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/post", postRoutes);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
