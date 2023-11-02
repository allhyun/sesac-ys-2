const {Customer, Orders, Sequelize }=require("../model")
const Op= Sequelize.Op;


exports.main = async (req,res) => {
    //customer의 주문목록 "custname" 과 함께
    const cust = await Customer.findAll({
        attributes:["custid","custname","birth"],//객체를 가져온다
        where: {birth:{ [Op.gte]: "2000-01-01"}},//gte 이상이다 라는 의미 op사용하려면 객체로 가져와서 사용
        include:[ //배열을 기본으로 가져온다
        {
            model: Orders,
            attributes:{ exclude :["custid"]},//exclude제외하는 방법
            // where:{ }
        },
    ],
    raw:true
    }
    );


    res.send(cust);
}