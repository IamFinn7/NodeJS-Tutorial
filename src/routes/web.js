const express = require("express");
const {
  getHomePage,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/create", getCreatePage);

router.post("/createUser", postCreateUser);

module.exports = router; //export default
