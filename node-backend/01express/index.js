const express = require('express');  //express 모듈 import

const app = express(); //server 객체를 만듬!

const PORT = 8000; //포트 

// //1~65536 존재. 1~1023 까지는 정해진 기능이 있다
// //3000, 8000, 8080, 8010, 3010, 3001
// //3306 : mysql에서 사용함

//app객체의 view engine 설정을 ejs로 변경
app.set("view engine","ejs")
// app 객체의 view 폴더 설정. 기본값 : ./views
//만약 ./view 폴더로 바꾸고 싶다면 아래처럼 작성하면 된다.
//app.set("views", "./views") //views 의 기본 설정값은 ./views 이다.


//미들웨어 "/static 은 클라이언트가 접속할 수 있는 주소"
app.use("/static", express.static(__dirname + "/static"));
//c://users/~~~~/01express/static 를 클라이언트가 /static 이름(주소)으로 들어올 수 있다
//http://localhost:8000/css/style.css <- 예시주소 


//app.use("/public", express.static(__dirname + "/static"));
//c://users/~~~~/01express/static 를 클라이언트가 /public 이름(주소)으로 들어올 수 있다



//get 메소드(http 메소드) :클라이언트가 요청할 수 있는 방법들을 정의 함.
//localhost:8000
app.get('/', function(req,res){
    //응답객체 내의 
    res.send('hello express hello');

});
//http 메소드의 두번째 인자로 넘겨주는 콜백함수의 매개변수
// 첫번째 매개변수 : request 객체(요청)
//두번째 매개변수 : response 객체 (응답)


//http://localhost:8000/test 라능 링크도 만들고싶으면 코드를 추가해야함! 코드를 수정하는게 아니라 추가로 작성하면된다!

app.get("/test",function(req,res){
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
    // res.send("<div>hello</div>");
});

//localhost:8000/ejss
//views 폴더의 index.ejs 파일 여는 주소 만든 것임.
app.get("/ejss", function(req,res){
       res.render("index") 
})



//localhost:8000/ejs
app.get("/ejs", function(req,res){
    //render 메소드를 쓰는 순간 기본 directery "./views/"
    //res.render("index.ejs")
    res.render("test/index") //test 폴더의 index파일 불러오겠다..<확장자 안적어도 됩니다>
})

app.get("/dahyun", function(req,res){
    res.render("dahyun", { name: "dahyun", product: ["운동화" , "후드집업" , "스웨터"] });
})

// listen 메소드를 이용해서 서버를 연다.
//localhost :8000
// 127.0.0.1:8000
app.listen(PORT, function(){
    console.log('server open ${PORT}');
 });

