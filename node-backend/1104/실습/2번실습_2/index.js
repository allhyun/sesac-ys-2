const express = require("express");
const app = express();
const port = 8000;
const session = require("express-session")

app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(session({
    secret:"secret key",
    resave: true ,
    saveUninitialized: true , 
    cookie:{
        httpOnly : true ,

    },
})) 


app.get("/",(req,res)=>{
    res.render("index",{user:req.session.user});
})


app.get("/get", (req,res) => {
    req.session.user="dahyun"
        res.send('set session')
    
})

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});