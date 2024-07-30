const connection = require("../config/database");
const {
  getAllUsers,
  getInfoUser,
  updateUserByID,
  deleteUserByID,
  createUser,
} = require("../services/CRUDservice");

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const postCreateUser = async (req, res) => {
  let email = req.body.tempEmail;
  let name = req.body.tempName;
  let city = req.body.tempCity;

  await createUser(email, name, city);
  res.redirect("/");
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

  await updateUserByID(userId, email, name, city);
  res.redirect("/");
};

const postDeleteUserByID = async (req, res) => {
  let userId = req.body.tempId;
  await deleteUserByID(userId);
  res.redirect("/");
};

module.exports = {
  getHomePage,
  postCreateUser,
  getCreatePage,
  getEditPage,
  postUpdateUserByID,
  postDeleteUserByID,
};
