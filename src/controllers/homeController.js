const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDservice");

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const postCreateUser = async (req, res) => {
  let email = req.body.tempEmail;
  let name = req.body.tempName;
  let city = req.body.tempCity;

  //viết code dưới dạng thông thường
  // connection.query(
  // "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)",
  // [email, name, city],
  //   function (err, results) {
  //     res.send("Create user succeed!");
  //   }
  // );

  //viết code dưới dạng async-await (mysql2/promise)
  let [results, fields] = await connection.query(
    "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)",
    [email, name, city]
  );
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

// const finn = (req, res) => {
//   res.render("sample.ejs");
// };

module.exports = {
  getHomePage,
  postCreateUser,
  getCreatePage,
};
