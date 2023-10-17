const express = require("express");
const app = express();
const PORT = 8000;
app.set("view engine", "ejs");

//req.body를 해석하기 위한 코드
app.use(express.urlencoded({extended:true}));
//x-www-form-unlencoded 형태의 데이터를 해석
//extended: true일 경우 qs 모듈(외부모듈)을 이용한다. false일 경우 내장묘듈인  queryString을 사용한다

app.use(express.json());
// aplication/json 형태의 데이터를 해석

//localhost:8000 url 접속에 대한 응답을 위해 만든 코드
app.get("/", function (req, res) {
    res.render("index");
  });

  //get요청은 url로 접속이 가능하다.
  
  //req.query 데이터가 담겨서 온다.
  //get 요청은 데이터를 보낼때 url에 직접 query를 만들어서 전송이 가능하다.
  //데이터 전송 시에 form태그를 이용할 경우, method를 get으로 해놓으면 get 요청
  //localhost:8000/get
app.get("/get", function (req,res){
    console.log(req.query);
    console.log(req.query.id);
    // req.query : get 요청에 대해 client가 보낸 데이터를 담고있다.
    // url에서 기본 주소(localhost:8000/get) 뒤에 오는 ?id=
    //기본주소 ? id=lilt&pw=1234
    //url에 전송되는 데이터가 노출된다. 즉, 개인정보를 위한 전송은 get으로 하지 않는다.
    //정보를 조회하는 요청에 사용한다. (CRUD 중에서 read를 의미하는 요청에서 사용한다.)
    res.send("get 요청 성공!")
})
//idex.ejs 파일을 연결해서 서버를 오픈하겠다.



//POST 메소드
//localhost:8000/post 로 post요청을 받기위한 준비
//post요청은 url로 직접 요청하는건 불가능 하다.
//post요청에 대한 데이터는 req.body에 담아서 온다.
//정보가 숨겨짐.(url로 노출되지 않음)
//데이터를 새로 생성하는 요청에 주로 사용(CRUD 중에서 CREATE를 의미하는 요청에서 사용한다.)
app.post("/post",function(req,res){
  console.log(req.body);
  res.send("post요청 성공!")
})

app.post("/post/ver2",function(req,res){
  console.log(req.body);
  res.render("result",{
    name:req.body.name ,
    email:req.body.email,
  })
})

//조회, 데이터를 저장하기 위해서 요청을 보내는 것이냐 ( db에 삽입), 원래있던 데이터를 변경하기 위해
//crud (create, read, update, delete)


app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });

//port method는 body에 실어서 전송