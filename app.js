const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

async function main() {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  app.listen(port, () => {
    console.log(`Rosebud at http://localhost:${port}`);
  });
}

main();
