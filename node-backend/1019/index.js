const express = require("express");
const app = express();
const PORT = 8000;


app.set("view engine", "ejs");

//body를 읽어오기 위한 코드(밑에 두개)
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("index유효성검사코드")
    // render는 html을 다 불러온다고 생각하면된다.

});

app.get("/ajax",function(req,res){
    res.send(req.query)
    console.log(req.query);
    // send는 쿼리를 불러오는 코드
    //{key:value, key:value}

});
app.post("/ajax",function(req,res){
    res.send(req.body)
    console.log(req.body);
    // send는 쿼리를 불러오는 코드
    //{key:value, key:value}

});
app.get("/axios",function(req,res){
    res.send(req.query)
    console.log(req.query);
});
app.post("/axios",function(req,res){
    const data={
        ...req.body,
        msg:"반가워요"
    }
    //{
    //     id:,
    //     name:,
    //     pw:,
    //     msg:
    // }
    res.send(data)
    console.log(req.body);
});

app.get("/fetch",function(req,res){
    res.send(req.query)
    console.log(req.query);
});

app.post("/fetch",function(req,res){
    res.send(req.body)
    console.log(req.body);
});


// app.post("/~~~",function(req,res){
//     const id ="dahyun";
//     const pw ="0110";
//     //req.body와 id.pw를 비교하는 코드 작성
//     //


app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });