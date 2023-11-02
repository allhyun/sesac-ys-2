const Sequelize = require("sequelize");


const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize; //Customer.js에 1번행 sequelize로 보냄
db.Sequelize = Sequelize;


//model내 파일과 연결해주기 <모델 작성 완료 후>
db.Customer = require("./Customer")(sequelize, Sequelize);
db.Orders = require("./Orders")(sequelize, Sequelize);

db.Customer.hasMany(db.Orders,{
    // onDelete: "CASCADE",
    foreignKey: "custid",
    //sourceKey:"custid"
})

db.Orders.belongsTo(db.Customer,{
    // onDelete: "CASCADE",
    foreignKey: "custid",
    // targetKey:"custid"
})
//1:다 입장에서 관계를 걸어줌.

module.exports = db;