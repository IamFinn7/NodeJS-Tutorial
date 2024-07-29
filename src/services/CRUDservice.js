const connection = require("../config/database");

const getAllUsers = async () => {
  let [results, fields] = await connection.query("SELECT * FROM Users");
  return results;
};

const getInfoUser = async (userId) => {
  let [results, fields] = await connection.query(
    "SELECT * FROM Users WHERE id = ?",
    [userId]
  );

  let user = results && results.length > 0 ? results[0] : {};
  return user;
};

const updateUserByID = async (userId, email, name, city) => {
  let [results, fields] = await connection.query(
    `UPDATE Users 
    SET email = ?, name = ?, city = ?
    WHERE id = ?`,
    [email, name, city, userId]
  );
  return results;
};

const deleteUserByID = async (userId) => {
  let [results, fields] = await connection.query(
    `DELETE FROM Users
    WHERE id = ?`,
    [userId]
  );
  return results;
};

module.exports = {
  getAllUsers,
  getInfoUser,
  updateUserByID,
  deleteUserByID,
};
