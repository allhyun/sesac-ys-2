const express = require("express")
const router = express.Router

router.get("/",function(req,res){
    res.render("prac")
});
router.post("/axios",function(req,res){
    
    console.log(req.body);
    
  
    res.send(req.body);
});