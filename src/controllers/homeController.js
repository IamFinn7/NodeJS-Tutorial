const connection = require("../config/database");

const getHomePage = (req, res) => {
  // connection.query("SELECT * FROM Users u", function (err, results, fields) {
  //   user = results;
  //   console.log(results); // results contains rows returned by server
  // });

  return res.render("home.ejs");
};

const finn = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  finn,
};
