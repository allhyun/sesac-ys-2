const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const port = 8000;

app.use(cookieParser());
app.set("view engine", "ejs")

app.get("/",(req,res)=>{
    res.render("index")
})


    const cookieConfig={
        
        expires:"2023-11-11T18:00",
        maxAge:24*60*60
    
    }
    function setPopup(){
        if(div.todaycheck == true){
            const expireDate=new Date();
            expireDate.setHours(24);
            document.cookie="notShowPop=true; path=/; expires="+expireDate.toGMTString();
        }
      }



app.get("/set", (req,res) => {

    //서버가 쿠키를 만들어서 응답으로 보낸다.
    //key: key1 value=value1
    res.cookie("key1","value1",cookieConfig);
    if(req.body.todaycheck==true){
        const expireDate=new Date();
            expireDate.setHours(24);
            document.cookie="notShowPop=true; path=/; expires="+expireDate.toGMTString();
    }
    console.log("check:",req.cookies)
    res.send("set cookie");
})

app.get("/get",(req,res)=>{
    console.log("cookie:",req.cookies.key1)
    res.send(req.cookies)
})
app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});