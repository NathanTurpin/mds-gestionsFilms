const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite:datas.db");

const Films = require("./Films")(sequelize, DataTypes);
const Avis = require("./Avis")(sequelize, DataTypes);
const Acteurs = require("./Acteurs")(sequelize, DataTypes);

Films.hasMany(Avis);
Avis.belongsTo(Films);
const films_acteurs = sequelize.define(
  "films_acteurs",
  {
    ids: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  { timestamps: false }
);
Films.belongsToMany(Acteurs, { through: "films_acteurs" });
Acteurs.belongsToMany(Films, { through: "films_acteurs" });

console.log("check de la connexion à la bd ...");

module.exports = sequelize;
