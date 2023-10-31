const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];
//config파일에 db에대한 설정을 저장하겠다는 의미이다. []에 들어갈 설정을 저장하는 방법
//../config/config.json 의 development의 키를 (접근)가져오겠다 는 의미
const db = {};
const sequelize = new Sequelize( //Sequelize공식문서여서 순서는 지켜랏
  config.database,
  config.username,
  config.password,
  config //전체 config를 넣는다.
);//sequelize 객체를 만든다.


//객체 할당해줌.
db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = {sequelize : sequelize , Sequelize : Sequelize}
//할당하고나면 위에처럼 객체생성


db.Visitor = require("./Visitor")(sequelize, Sequelize);
//db.Visitor = Visitor(sequelize, Sequelize); 와 같은의미
//db.Visitor에는 sequelize로 Visitor테이블을 정의한 객체를 담는다.




module.exports = db;