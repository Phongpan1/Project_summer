require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT||5500;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/location", (req, res) => {
    res.render("location");
  });

  app.get("/Photo", (req, res) => {
    res.render("Photo");
  });

  app.get("/Photographer", (req, res) => {
    res.render("Photographer");
  });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});