const path = require("path");
const express = require("express");
const app = express();

const port = process.env.PORT || 4545;

const publicPath = path.join(__dirname, "/../public");

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`server is up on port ${4545}`);
});
