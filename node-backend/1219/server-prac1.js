// const http = require("http");
// const express = require("express");
// const app = express();
// const server = http.createServer(app);
// const PORT = 8000;


// // cors 이슈 : 다름서버에서 보내는 요청을 제한함
// // 현재 클라이언트와 서버 의 서버가 다르기때문이다..

// const cors =require("cors")
// app.use(cors()); //cors를 사용하겠다..


// const io=require("socket.io")(server,{
//    cors: {
//     origin: "http://localhost:3000",
//     // methods:["GET","POST"],
//    }
//   // 서버 모듈이 필요하다
//   // 서버가 다른게 열려있다고 오류가나기때문이다.
//   // 소켓속에서...허용...
// })

// io.on("connection",(socket)=>{
//   console.log("socket id", socket.id);

//   // 클라이언트에서 먼저 작성해주고 서버측 작성해줬음
//   socket.on("hello~~", (res)=>{
//     console.log(res);
//     socket.emit("reshello",{msg:"안녕하십니까"})
//   }
//   )
// });

// server.listen(PORT, function () {
//   console.log(`Sever Open: ${PORT}`);
// });



const http = require("http");
const express = require("express");
const app = express();
// 소켓이 http모듈로 생성된 서버에서만 동작
const server = http.createServer(app);
const PORT = 8000;

// cors 이슈 : 다른 서버에서 보내는 요청을 제한함
const cors = require("cors");
app.use(cors());

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    // methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("socket id", socket.id);
  socket.on("hello", (res) => {
    console.log(res);
    socket.emit("resHello", { msg: "안녕하세요~" });
  });
});

server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});