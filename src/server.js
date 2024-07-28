require("dotenv").config();
const express = require("express");
// const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

//----------------------------CONNECT DATABASE----------------------------
// A simple SELECT query

//-------------------------------------------------------------------------

const app = express();
const port = process.env.PORT || 3333; //if the port fails, use another one
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//khai báo route
app.use("/", webRoutes);

//test connection

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
