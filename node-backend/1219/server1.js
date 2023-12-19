const http = require("http");
const express = require("express");
const app = express();
// http를 이용해서 하나의 서버를 만들었다..?
// 소켓이 http 모듈로 생성된 서버에서만 동작한다.
const server = http.createServer(app);
const PORT = 8000;

// 소켓 객체
// const socket = require("socket.io")
// const io =Socket(server)
const io=require("socket.io")(server)

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("client1");
});                     

io.on("connection",(socket)=>{
  // 콜백함수의 매개변수에 있는 socket객체
  // 접속한 클라이언트의 소켓이다.
  console.log("socket id",socket.id);

  // on을 이용해, 클라이언트에서 socket을 이용해서 보내준 데이터를
  // 받을 이벤트를 등록함.
  socket.on("hello", (res)=>{
    // res에는 소켓을 이용해 보내준 데이터가 담겨서 온다
    console.log(res)
    socket.emit("bye", { msg: "안녕히 가세요~" });

  });

  socket.on("entry", (res) => {
    console.log(res);
    io.emit("notice", { msg: `${socket.id}님이 입장했습니다.` });
  });

  socket.on("Hello", (res)=>{
    // res에는 소켓을 이용해 보내준 데이터가 담겨서 온다
    console.log(res)
    io.emit("Hello", { msg: "안녕?" });
    
  });
  
  socket.on("study", (res)=>{
    // res에는 소켓을 이용해 보내준 데이터가 담겨서 온다
    console.log(res)
    io.emit("study", { msg: "공부하세요?" });
    
  });
  
  socket.on("bye", (res)=>{
    // res에는 소켓을 이용해 보내준 데이터가 담겨서 온다
    console.log(res)
    io.emit("bye", { msg: "잘가?" });
    
  });
});


server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});