function Films(sequelize, datatypes) {
  return sequelize.define("films", {
    title: {
      type: datatypes.STRING,
      allowNull: true, // CHAMP REQUIS
    },
    synopsis: {
      type: datatypes.STRING,
      allowNull: false, // CHAMP REQUIS
    },
    realisateur: {
      type: datatypes.STRING,
      allowNull: true, // CHAMP REQUIS
    },
  });
}
module.exports = Films;
