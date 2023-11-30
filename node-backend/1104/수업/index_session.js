const express = require("express");
const app = express();
const port = 8000;
const session = require("express-session")

app.use(session({
    secret:"secret key",
    resave: true , //모든 요청마다 session을 다시 저장할거냥?
    saveUninitialized: true , // 클라이언트가 처음 접속할때 , 세션을 한 번 초기화 할건지 말건지?
    cookie:{
        httpOnly : true ,// document.cookie로는 접속X
         maxAge: 3000

    },
    // secure: ture, //https(보안서버)에서만 동작하도록 함
})) //미들웨어로 세션을 걸어준다

// 기본구성
// app.use(session({
//     secret:,
//     resave:,
//     saveUninitialized:,
//     cookie:{
    //    httpOnly : true // document.cookie로는 접속X
    //    maxAge: 10 * 60 * 1000
//     },
//     secure:
// }))


app.get("/",(req,res)=>{
    res.send("hello world");
})

app.get("/set", (req, res)=>{
    console.log("1:",req.session) //session은 서버인데 왜 req를 쓰지? 하면 클라이언트별로 세션을 가지고있다 여서 req를 쓴ㄷ..
    // 로그인 성공한 시점에 req.session.user에 user을 식별할 수 있는 고유한 값을 담아놓고
    req.session.user="lily" 
    console.log("2:", req.session)
    res.send("set session")
})

//삭제하는 법
app.get("/",(res,req)=>{
    req.session.destroy((err) =>{
        if(err) throw err;
        res.send("로그아웃 성공")
    })
})


//다시 접속을했다
app.get("/get", (req,res) => {
    // 존재하는지 확인하기 위해서 if문을 사용해서 확인한다....id로 로그인했으면 ㅇㅋ고 내용과 다르면 로그인창을 띄워라...?
    if(req.session.user){
        res.render("profile",{}) // user가 맞으면 profile.ejs파일을 보여준다
        
    } else {
        res.redirect("/login")
    }
    console.log("user:",req.session.user);
    res.send({user: req.session.user});
})




app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});