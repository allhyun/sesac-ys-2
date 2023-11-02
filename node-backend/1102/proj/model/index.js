const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.Visitor =  require('./Visitor_proj_seq')(sequelize, Sequelize)

db.sequelize = sequelize;
db.Sequelize = Sequelize;



module.exports = db;