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

const createUser = async (email, name, city) => {
  //viết code dưới dạng thông thường
  // connection.query(
  // "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)",
  // [email, name, city],
  //   function (err, results) {
  //     res.send("Create user succeed!");
  //   }
  // );

  //viết code dưới dạng async-await (mysql2/promise)
  await connection.query(
    "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)",
    [email, name, city]
  );
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
  createUser,
  updateUserByID,
  deleteUserByID,
};
