const { Sequelize } = require("sequelize");
const path = require("path");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "../database.sqlite"), // Fichier de la BDD
  logging: false, // Désactiver les logs Sequelize
});

module.exports = sequelize;

