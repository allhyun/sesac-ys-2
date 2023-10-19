const express = require("express");
const app = express();
const PORT = 8000;


app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("proj2")
});
app.post("/axios",function(req,res){
    
    console.log(req.body);
    
  
    res.send(req.body)
});
app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });