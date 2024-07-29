const express = require("express");
const {
  getHomePage,
  postCreateUser,
  getCreatePage,
  getEditPage,
  postUpdateUserByID,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/create", getCreatePage);
router.get("/edit/:id", getEditPage);

router.post("/createUser", postCreateUser);
router.post("/updateUser", postUpdateUserByID);

module.exports = router; //export default
