require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");

const app = express();
const port = process.env.PORT || 3333;
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//khai báo route
app.get("/", (req, res) => {
  res.send("Hello World! and nodemon");
});

app.get("/finn", (req, res) => {
  // res.send('Check check!')
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
