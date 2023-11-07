const express = require("express");
const path= require("path")
const app = express();
const port = 8000;
const dotenv = require("dotenv");
//cross-env 프로그램사용하면 배포버전이냐?개발버전이냐에 따라 다른 env파일을 로드할 수 있게끔 도와준다.<npm i cross-env>


// console.log(process.env);
// dotenv.config();
//index.js와 같은 위체이 있는 .env 파일을 불러와서 환경변수로 사용할 수 있게끔 함.

dotenv.config({path: path.join(__dirname,"./config/envs/.env")});
dotenv.config({path: path.join(__dirname,`./config/envs/${process.env.NODE_ENV}.env`)})

// console.log(process.env.TEST_VAR);

console.log(process.env.PASSWORD);

app.get("/",(req,res)=>{
    res.send("hello world");
})


app.listen(process.env.PORT, ()=>{
    console.log( `Server Port : ${process.env.PORT}`);
});