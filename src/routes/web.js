const express = require("express");
const { getHomePage, finn } = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);

router.get("/finn", finn);

module.exports = router; //export default
