const express = require("express");
const {
  getAllUser,
  createNewUser,
  editUserByID,
  deleteUserByID,
} = require("../controllers/APIController");
const router = express.Router();

const apiRoutes = (app) => {
  router.get("/get-all-users", getAllUser);
  router.post("/create-user", createNewUser);
  router.put("/edit-user", editUserByID);
  router.delete("/delete-user", deleteUserByID);

  return app.use("/api/v1", router);
};

module.exports = apiRoutes; //export default

// router.get("/user", getAllUser);

// module.exports = router;
