const connection = require("../config/database");

const getAllUser = async (req, res) => {
  let [results, fields] = await connection.query("SELECT * FROM Users");

  return res.status(200).json({
    message: "ok",
    data: results,
  });
};

const createNewUser = async (req, res) => {
  let { email, name, city } = req.body;

  if (!email || !name || !city) {
    return res.status(200).json({
      message: "missing required params",
    });
  }

  await connection.query(
    "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)",
    [email, name, city]
  );
};

const editUserByID = async (req, res) => {
  let { email, name, city, userId } = req.body;

  let [results, fields] = await connection.query(
    `UPDATE Users 
    SET email = ?, name = ?, city = ?
    WHERE id = ?`,
    [email, name, city, userId]
  );
  return results;
};

const deleteUserByID = async (req, res) => {
  let { email, name, city, userId } = req.body;

  let [results, fields] = await connection.query(
    `DELETE FROM Users
    WHERE id = ?`,
    [userId]
  );
  return results;
};

module.exports = {
  getAllUser,
  createNewUser,
  editUserByID,
  deleteUserByID,
};
