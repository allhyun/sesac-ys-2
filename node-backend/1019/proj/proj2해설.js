const express = require("express");
const app = express();
const PORT = 8000;


app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("proj2해섷")
});
app.post("/axios",function(req,res){
    
    const id ="dahyun"
    const pw ="0110"
    if(req.body.id == id && req.body.pw == pw) {
        data = {
            isSucess : true,
            msg: "로그인성공!"
        }
    }else{
        data = {
            isSucess : false,
            msg: "로그인실패!"
        }
    }
    res.send(req.body);
    console.log(req.body);
});
app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });