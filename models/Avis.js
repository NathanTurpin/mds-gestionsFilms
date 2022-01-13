function Avis(sequelize, datatypes) {
  return sequelize.define("avis", {
    pseudo: {
      type: datatypes.STRING,
      allowNull: true, // CHAMP REQUIS
    },
    note: {
      type: datatypes.FLOAT(5),
      allowNull: true, // CHAMP REQUIS
    },
    message: {
      type: datatypes.STRING,
      allowNull: false, // CHAMP REQUIS
    },
  });
}
module.exports = Avis;
