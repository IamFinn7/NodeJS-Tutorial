require("dotenv").config();

const express = require("express");
// const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
// const connection = require("./config/database");

const app = express();
const port = process.env.PORT || 3333; //if the port fails, use another one
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json()); //for json
app.use(express.urlencoded({ extended: true }));

//config template engine
configViewEngine(app);

//khai báo route web
app.use("/", webRoutes);

//khai báo route API
apiRoutes(app);

//test connection

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
