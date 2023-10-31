//테이블의 구조를 정의
// orm은 객체와 db의 table을 매핑하는 기술
// sequelize를 이용해서 table의 구조를 정의할 필요가 있음.


function Visitor(Sequelize, DataTypes) {
    return Sequelize.define(//모델(테이블) 정의, sequelize 객체의 define메소드를 이용해서

    "visitor",//테이블 이름
    {
        id:{ //int NOT NULL AUTO_INCREMENT PRIMARY KEY 
         type:DataTypes.INTEGER, 
         allowNull: false, //TRUE가 기본값이다.
         primaryKey: true, //FALSE가 기본값이다.
         autoIncrement: true,

        },
        username:{ //varchar(10)
            type:DataTypes.STRING(10),
            // allowNull: true //TRUE가 기본값이다
        },
        comment:{
            type:DataTypes.TEXT("midium"),
            // allowNull: true //TRUE가 기본값이다
        }
    },//컬럼 정의
    {
        tableName : "visitor",
        freezeTableName: true, 
        // sequelize에서 간혼 단수로 지정해둔 테이블 이름을 sql문을 날릴때 복수로 변경을 시켜서 날리는 경우가 있음
        //ex)insert into visitor~~ => create() => insert into visitors~~
        timestamps: false,
        //insert, update 시에 그 시간을 자동으로 저장하겠다. => 기본값
        //저장하지마! -> false로
        //creatAt,updateAt 이라는 컬럼이 자동으로 생긴다
    }
    )
}

module.exports = Visitor;
//함수를 실행시키는 걸 담은게아니라 함수를 담았음 다른파일에서 실행시키려구