const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3030;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

async function main() {
  app.use("/admin", require("./routes/adminRoutes"));
  app.use("/", (req, res) => {
    res.status(404).send("404 - Not Found");
  });
  app.listen(port, () => {
    console.log(`Rosebud at http://localhost:${port}`);
  });
}

main();
