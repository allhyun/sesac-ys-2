const express = require("express");
const app = express();
const port = 8000;
const cookieParser = require("cookie-parser");
app.use(cookieParser());//쿠키를 해석할 수 있게 해줌.
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
  });

const cookieConfig={
    // httpOnly:true, //daquments 
    maxAge: 24*60*60,//ms단위로 보존하고자 하는 기간을 설정
    //
    //expires : "2023-11-04 T18:00"
//   path: "/" ,//test ->localhost:8000/test/~~~   //https 보안서버에서만 쿠키를 동작하게
//   secure: true // 쿠키 암호화=> req.signedCookies

// signed: true// 쿠키 암호화=> req.signedCookies
}

// app.use( "/static", express.static( "static" ) ); 
// app.use(express.urlencoded({extended: true}));
// app.use( express.json() );

// const router = require("./routes/project"); //라우츠  파일안에있는 파일을 연결한다.
// app.use('/', router);

// app.get('/', (req,res) =>{
//     req.cookie
//     res.send("hello world");
// });

app.get("/set", (req,res) => {

    //서버가 쿠키를 만들어서 응답으로 보낸다.
    //key: key1 value=value1
    res.cookie("key1","value1",cookieConfig)
    res.send("set cookie");
})

app.get("/get",(req,res)=>{
    console.log("cookie:",req.cookies.key1)
    res.send(req.cookies)
})
app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});