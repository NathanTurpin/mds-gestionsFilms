const express = require("express");
const sequelize = require("./models");
const cors = require("cors");

const app = express();

// app.use(cors());
//traiter les data d'un json
app.use(express.json());
//traiter les data d'un form
app.use(express.urlencoded());

const filmsRouter = require("./route/filmsRoute");
app.use("/films", filmsRouter);

const acteursRouter = require("./route/acteursRoute");
app.use("/acteurs", acteursRouter);

const filmsacteursRouter = require("./route/filmsacteursRoute");
app.use("/filmsacteurs", filmsacteursRouter);

const avisRouter = require("./route/avisRoute");
app.use("/avis", avisRouter);

sequelize
  .authenticate()
  .then(() => {
    console.log("db on");
    app.listen(3000, () => {
      console.log("http://localhost:3000");
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
