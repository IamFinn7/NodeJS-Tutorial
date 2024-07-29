const connection = require("../config/database");
const {
  getAllUsers,
  getInfoUser,
  updateUserByID,
} = require("../services/CRUDservice");

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const postCreateUser = async (req, res) => {
  let email = req.body.tempEmail;
  let name = req.body.tempName;
  let city = req.body.tempCity;

  //viết code dưới dạng async-await (mysql2/promise)
  let [results, fields] = await connection.query(
    "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)",
    [email, name, city]
  );

  //viết code dưới dạng thông thường
  // connection.query(
  // "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)",
  // [email, name, city],
  //   function (err, results) {
  //     res.send("Create user succeed!");
  //   }
  // );
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getEditPage = async (req, res) => {
  const userId = req.params.id;
  let user = await getInfoUser(userId);

  res.render("edit.ejs", { infoUser: user });
};

const postUpdateUserByID = async (req, res) => {
  let email = req.body.tempEmail;
  let name = req.body.tempName;
  let city = req.body.tempCity;
  let userId = req.body.tempId;

  let userUpdated = await updateUserByID(userId, email, name, city);
  res.redirect("/");
};

module.exports = {
  getHomePage,
  postCreateUser,
  getCreatePage,
  getEditPage,
  postUpdateUserByID,
};
