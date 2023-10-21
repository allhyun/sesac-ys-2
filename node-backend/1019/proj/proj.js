const express = require("express");
const app = express();
const PORT = 8000;


app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("proj")
});
app.get("/axios",function(req,res){
    res.send(req.query)
    console.log(req.query);
});


app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });