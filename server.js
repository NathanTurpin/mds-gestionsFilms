const express = require("express");
const sequelize = require("./models");

const app = express();

sequelize
  .authenticate()
  .then(() => {
    console.log("db on");
    app.listen(3000, () => {
      console.log(`http://localhost:3000`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
