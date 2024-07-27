const getHomePage = (req, res) => {
  res.send("Hello World! and nodemon!!");
};

const finn = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  finn,
};
