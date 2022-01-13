const express = require("express");
const router = express.Router();
const sequelize = require("../models");

// GET ALL avis
router.get("/", (req, res) => {
  sequelize.models.avis.findAll().then((avis) => res.json(avis));
});

// GET avis BY ID
router.get("/:avisId", (req, res) => {
  sequelize.models.avis
    .findByPk(req.params.avisId)
    .then((avis) => res.json(avis));
});

// CREATE avis
router.post("/", (req, res) => {
  console.log(req.body);

  sequelize.models.avis
    .create(req.body)
    .then((avis) => res.status(201).json(avis));
});

// DELETE avis BY ID
router.delete("/:avisId", (req, res) => {
  sequelize.models.avis
    .destroy({
      where: {
        id: req.params.avisId,
      },
    })
    .then(res.json({ msg: " avis supprimé" }));
});

// UPDATE avis BY ID
router.patch("/:avisid", (req, res) => {
  sequelize.models.avis
    .update(req.body, {
      where: {
        id: req.params.avisid,
      },
    })
    .then((avis) => res.status(200).json(avis));
  console.log(req.body);
});
module.exports = router;
