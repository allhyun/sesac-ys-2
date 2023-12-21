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
    origin: "http://localhost:3001",
  },
});

// 유저아이디를 저장..?

const userIdArr = {};
// { "socket.id": "userId1", "socket.id": "userId2" ,"socket.id": "userId3"  }

const updateUseList = () => {
  io.emit("userList", userIdArr )
}

io.on("connection", (socket) => {
  console.log("socket id", socket.id);
  // abcdjfkladjflaksjrlew
  // [실습 3번] socket id를 이용해 입장 공지
  // io.emit("notice", { msg: `${socket.id}님이 입장하셨습니다.` });

  

  // [실습 3-1번] 입장 시에 받은 user id로 입장 공지
  socket.on("entry", (res) => {
    // 중복된다는 오류 메세지를 보내주던지
    // 실습 3번
    // io.emit("notice", { msg: `${res.userId}님이 입장하셨습니다.` });
    // 실습 3-3. 퇴장시키는 코드 구현 -> 누가 입장하고 있는지 알아야하고, 해당 정보를 전체적으로  저장할 필요가 있다
    // userIdArr[socket.id] = res.userId;

     // [실습 3-2] 
    // Object.values(userIdArr)  =>  ["userId1","userId2","userId3"]
    // includes :문자열이나 배열에서 인자로 넘겨준 값이 존재하는지 안하는 지 찾을 수 있음.
    // indexOf : 배열에서 인자로 넘겨준 값의 인덱스를 추출 , 없다면 -1을 반환

    if(Object.values(userIdArr).includes(res.userId)){
      // 닉네임이 중복될 경우에
      // 실패한거를 alret로 알려줌..
      socket.emit("error", {msg: "중복된 아이디가 존재하여 입장이 불가합니다."})

    }else{
     // 닉네임이 중복되지않을경우에
      io.emit("notice", { msg: `${res.userId}님이 dlqwkd하셨습니다.` });
      // 성공한거 알려주고싶어서.!
      socket.emit("entrySuccess",{userId: res.userId})
     userIdArr[socket.id] =res.userId;
     updateUseList();

    }
    console.log(userIdArr)
  });

  // [실습 3-3] 퇴장시키기
  socket.on("disconnect", () => {
    io.emit("notice", { msg: `${userIdArr[socket.id]}님이 퇴장하셨습니다.` });
    delete userIdArr[socket.id];
    updateUseList()

  });

  // 클라이언트에서 데이터를 받아옴 
  socket.on("sendMsg", (res)=>{
    if(res.dm === 'all')
    // 서버측에서 접속해있는 모든사람들에게 내용을 전달할 수 있는 메소드..? io객체를 사용해서..? 
    io.emit("chat", {userId: res.userId , msg:res.msg})
    // 누가보냈는지 클라이언트에서도 받아오기(userId)
    // 전체에게 dm을 보내겠다는 조건
    else{
      // io.to(소켓아이디).emit() => 원하는 아이디한테만 보낼 수 있음
      // socket.emit() -> 나에게만 보낸다
      // io.emit() => 전체에게 보낸다..
      io.to(res.dm).emit("chat", {useId: res.userId, msg: res.msg, dm: true})
      // 내가 상대방한테 보냄
      socket.emit("chat", {useId: res.userId, msg: res.msg, dm: true})
      // 내가 보낸 내용 나에게 보이게

    }
  })
});

server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});