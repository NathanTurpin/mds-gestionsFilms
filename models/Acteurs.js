function Acteurs(sequelize, datatypes) {
  return sequelize.define("acteurs", {
    nom: {
      type: datatypes.STRING,
      allowNull: true, // CHAMP REQUIS
    },
    prenom: {
      type: datatypes.STRING,
      allowNull: true, // CHAMP REQUIS
    },
  });
}
module.exports = Acteurs;
