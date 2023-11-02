const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use( "/static", express.static( "static" ) ); 
app.use(express.urlencoded({extended: true}));
app.use( express.json() );

const router = require("./routes/project"); //라우츠  파일안에있는 파일을 연결한다.
app.use('/', router);

app.get('*', (req,res) =>{
    res.send("접근할 수 없는 주소입니다.");
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});
