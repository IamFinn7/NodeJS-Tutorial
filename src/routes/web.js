const express = require("express");
const {
  getHomePage,
  postCreateUser,
  getCreatePage,
  getEditPage,
  postUpdateUserByID,
  postDeleteUserByID,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/create", getCreatePage);
router.get("/edit/:id", getEditPage);

router.post("/createUser", postCreateUser);
router.post("/updateUserByID", postUpdateUserByID);
router.post("/deleteUserByID", postDeleteUserByID);

module.exports = router; //export default
