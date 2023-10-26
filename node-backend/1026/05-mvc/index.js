const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
//포스트웨어 요청 전에 미들웨어를 걸어줘야한다.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// [before]
// app.get("/", function (req, res) {
//   res.render("index");
// });

// const router = require("./routes/index");
//routes 하위폴더에서 불러오는것. 
//index.js를 불러오고 싶다면 폴더 이름까지만 접근해도됨. <단, 파일이 하나만 있어야함..?>
const router = require("./routes"); 
app.use("/", router);
// localhost:8000/~~~~~~




// 존재하지 않는 get 요청에 대해서
app.get("*", function (req, res) {
  res.send("페이지를 찾을 수 없습니다.");
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});