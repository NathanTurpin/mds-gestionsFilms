const express = require("express");
const router = express.Router();
const sequelize = require("../models");

// GET ALL acteurs
router.get("/", (req, res) => {
  sequelize.models.acteurs.findAll().then((acteurs) => res.json(acteurs));
});

// GET acteur BY ID
router.get("/:acteurId", (req, res) => {
  sequelize.models.acteurs
    .findByPk(req.params.acteurId)
    .then((acteur) => res.json(acteur));
});

// CREATE acteur
router.post("/", (req, res) => {
  console.log(req);

  sequelize.models.acteurs
    .create(req.body)
    .then((acteur) => res.status(201).json(acteur));
});

// DELETE acteur BY ID
router.delete("/:acteurId", (req, res) => {
  sequelize.models.acteurs
    .destroy({
      where: {
        id: req.params.acteurId,
      },
    })
    .then(res.json({ msg: " acteur supprimé" }));
});

// UPDATE acteur BY ID
router.patch("/:acteurid", (req, res) => {
  sequelize.models.acteurs
    .update(req.body, {
      where: {
        id: req.params.acteurid,
      },
    })
    .then((acteur) => res.status(200).json(acteur));
  console.log(req.body);
});
module.exports = router;
