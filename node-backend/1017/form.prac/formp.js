const express = require("express")
const app =express();
const PORT = 8800;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/",function(req,res){
    res.render("formp");
})
app.get("/get", function(req,res){
    console.log(req.query);
    res.send("성공")
})
app.post("/post/2", function(req,res){
    console.log(req.body)
    res.render("resultp",{
        
        // name:req.body.name,
        // gender:req.body.gender,
        // birth:req.body.year,
        // birth:req.body.month,
        // birth:req.body.day,
        // interest:req.body.interest

    })
})

app.listen(PORT, function(){
    console.log(`open: ${PORT}`)
})