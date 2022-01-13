const express = require("express");
const router = express.Router();
const sequelize = require("../models");

// GET ALL films_acteurs
router.get("/", (req, res) => {
  sequelize.models.films_acteurs
    .findAll()
    .then((films_acteurs) => res.json(films_acteurs));
});

// GET films_acteurs BY ID
router.get("/:films_acteursId", (req, res) => {
  sequelize.models.films_acteurs
    .findByPk(req.params.films_acteursId)
    .then((films_acteurs) => res.json(films_acteurs));
});

// CREATE films_acteurs
router.post("/", (req, res) => {
  console.log(req.body);

  sequelize.models.films_acteurs
    .create(req.body)
    .then((films_acteurs) => res.status(201).json(films_acteurs));
});

// DELETE films_acteurs BY ID
router.delete("/:films_acteursId", (req, res) => {
  sequelize.models.films_acteurs
    .destroy({
      where: {
        id: req.params.films_acteursId,
      },
    })
    .then(res.json({ msg: " films_acteurs supprimé" }));
});

// UPDATE films_acteurs BY ID
router.patch("/:films_acteursid", (req, res) => {
  sequelize.models.films_acteurs
    .update(req.body, {
      where: {
        ids: req.params.films_acteursid,
      },
    })
    .then((films_acteurs) => res.status(200).json(films_acteurs));
  console.log(req.body);
});
module.exports = router;
