const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//router, controller, model, view
//1.router분리 (요청을 정의)
//2. controller 분리(요청에대해 데이터를 처리하는 코드, view render, client에 응답)
//3. model분리 (데이터를 DB에 접근하여 데이터를 SELECT,INSERT,UPDATE,DELETE)


//app.get("/",function(res,req){ })
const router = require("./routes/pracindex해설");
app.use("/user",router);
//localhosst:8000/user/~~~




app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});