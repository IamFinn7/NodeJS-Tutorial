const connection = require("../config/database");

const getHomePage = (req, res) => {
  // connection.query("SELECT * FROM Users u", function (err, results, fields) {
  //   user = results;
  //   console.log(results); // results contains rows returned by server
  // });

  return res.render("home.ejs");
};

const postCreateUser = (req, res) => {
  let email = req.body.tempEmail;
  let name = req.body.tempName;
  let city = req.body.tempCity;

  console.log(email, name, city);

  connection.query(
    "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)",
    [email, name, city],
    function (err, results) {
      res.send("Create user succeed!");
    }
  );

  //let {email, name, city} = req.body
};

// const finn = (req, res) => {
//   res.render("sample.ejs");
// };

module.exports = {
  getHomePage,
  postCreateUser,
};
