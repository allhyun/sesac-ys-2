const {Visitor} = require('../model')

exports.index = (req, res) => {
  res.render('index')
}

exports.signup = (req, res) => {
  res.render('signup')
}


exports.post_signup = async(req, res) => {
    const data = {
        // id: req.body.id,
        userid: req.body.userid,
        pw: req.body.pw,
        name: req.body.name,
    }
    const createUser= await Visitor.create(data)
    res.send(createUser);

}

exports.signin = (req, res) => {
  res.render('signin')
}


exports.post_signin = (req, res) => {
  //모델과 연결해서 실제로 회원이 존재하는 지 검색
  //model User.js 에서 exports.post_signin = 와 연결됨.
  // 성공 : {result : true, id: 숫자}
  // 실패 : {result : false }
  User.post_signin(req.body, function (rows) {
    console.log(rows[0])
    if (rows.length > 0){
       res.send({ result: true, id: rows[0].id })
    }
    else {
       res.send({ result: false })
       }
  })
}
  

exports.profile = (req, res) => {
  //ID를 넘기고 조회하게..
  User.findAll({
    attributes:["id","name"],
    order:["id"]
  }).then((result)=>{
    res.send(result);
  })
}







exports.profile_edit = (req, res) => {
  //model과 연결하여 update
  const data = {
    ...req.body,
    id: req.params.id, //url에 있는 id가 넘어옴.
  }
  User.update_profile(data, {
    where: {
        id: req.params.id,
    }
  }).then((result)=>{
    res.send({ result: true });
  })
   
  }




exports.profile_delete = (req, res) => {
  User.delete_user(req.params.id,  ()=> {
    res.send({ result: true })
  })
}
