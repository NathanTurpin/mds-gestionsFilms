const express = require("express");
const router = express.Router();
const sequelize = require("../models");

// GET ALL FILMS
router.get("/", (req, res) => {
  sequelize.models.films.findAll().then((films) => res.json(films));
});

// GET FILM BY ID
router.get("/:filmId", (req, res) => {
  sequelize.models.films
    .findByPk(req.params.filmId)
    .then((film) => res.json(film));
});

// CREATE FILM
router.post("/", (req, res) => {
  console.log(req.body);

  sequelize.models.films
    .create(req.body)
    .then((film) => res.status(201).json(film));
});

// DELETE FILM BY ID
router.delete("/:filmId", (req, res) => {
  sequelize.models.films
    .destroy({
      where: {
        id: req.params.filmId,
      },
    })
    .then(res.json({ msg: " film supprimé" }));
});

// UPDATE FILM BY ID
router.patch("/:filmid", (req, res) => {
  sequelize.models.films
    .update(req.body, {
      where: {
        id: req.params.filmid,
      },
    })
    .then((film) => res.status(200).json(film));
  console.log(req.body);
});
module.exports = router;
