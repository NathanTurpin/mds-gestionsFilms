const sequelize = require("./models");

sequelize.authenticate().then(() => {
  console.log("connection etablie");
  sequelize.sync({ force: true }).then(() => {
    console.log("les tables sont a jour");
    console.log(sequelize.models);
    sequelize.models.films.create({
      title: "Men in Black 1 ",
      synopsis:
        "K and J, (the men in black) are the scum-fighting super-agents; their latest mission is to save the world from a total intergalactic disaster.",
      realisateur: "Barry Sonnenfeld",
    });
    sequelize.models.films.create({
      title: "Spider-man",
      synopsis:
        "Peter Parker's life changes when he is bitten by a genetically altered spider and gains superpowers. He uses his powers to help people and finds himself facing the Green Goblin, an evil maniac.",
      realisateur: "Sam Raimi",
    });
    sequelize.models.acteurs.create({
      nom: "Will",
      prenom: "Smith",
    });
    sequelize.models.acteurs.create({
      nom: "Tommy Lee",
      prenom: "Jones",
    });
    sequelize.models.acteurs.create({
      nom: "Tobey",
      prenom: "Maguire",
    });

    sequelize.models.acteurs.create({
      nom: "Willem",
      prenom: "Dafoe",
    });
    sequelize.models.films_acteurs.create({
      filmId: "1",
      acteurId: "1",
    });
    sequelize.models.films_acteurs.create({
      filmId: "1",
      acteurId: "2",
    });
    sequelize.models.films_acteurs.create({
      filmId: "2",
      acteurId: "3",
    });
    sequelize.models.films_acteurs.create({
      filmId: "2",
      acteurId: "4",
    });
    sequelize.models.avis.create({
      pseudo: "pseudo 1",
      note: 5,
      message: "Edgar, t’as la peau qui flotte.",
      filmId: 1,
    });
    sequelize.models.avis.create({
      pseudo: "pseudo 2",
      note: 4,
      message: "La différence entre toi et moi, c’est que moi j’ai la classe.",
      filmId: 1,
    });
    sequelize.models.avis.create({
      pseudo: "pseudo 3",
      note: 4,
      message: "Remanier la formule",
      filmId: 2,
    });
    sequelize.models.avis.create({
      pseudo: "pseudo 4",
      note: "4",
      message: "À grand pouvoir, grandes responsabilités.",
      filmId: 2,
    });
  });
});
