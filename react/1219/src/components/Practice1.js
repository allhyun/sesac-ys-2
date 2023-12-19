// import io from "socket.io-client"
// import {useEffect, useRef } from "react"

// // ejs에서 const socket = io() 랑 같음
// const socket = io.connect("http://localhost:8000/",{autoConnect: false})
// // 자동으로 커넥트하겠다..autoConnect => 자동으로 커넥팅한다 옵션으로 커넥팅못하게하는 행위
// export default function Practice1 (){

//   const initSocketConnect = () =>{
//     if(!socket.connected) socket.connect();
//     // false일때만 커넥팅하겠다

//   }


//   useEffect(()=>{
//     initSocketConnect();
//     // 마운트될때 함수를 실행시키겠다

//     // 마운트시점에 받을 수 있도록 설정해주기
//     socket.on("resHello",(res)=>{
//       console.log(res);
//       resultMsg(res)
//      })

//   },[])

//   const resultMsg =(res)=>{
//     result.current.innerText = res.msg
//   }

//   const hello = () => {
//     socket.emit("hello",{msg:"hello"})
//   }
//   const study = () => {
//     socket.emit("study",{msg:"study"})
//   }
//   const bye = () => {
//     socket.emit("bye",{msg:"bye"})
//   }
  
//   const result = useRef(null)

//   return(
//     <>
//     <h3> 소켓 실습 1</h3>
//     <button onClick={hello}>hello</button>
//     <button onClick={study}>study</button>
//     <button onClick={bye}>bye</button>
//     <p ref={result}></p>


//     </>
//   )
// }



import io from "socket.io-client";
import { useEffect, useRef } from "react";

const socket = io.connect("http://localhost:8000", { autoConnect: false });
export default function Practice1() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    initSocketConnect();

    socket.on("resHello", (res) => {
      console.log(res);
      resultMsg(res);
    });
  }, []);

  const resultMsg = (res) => {
    result.current.innerText = res.msg;
  };

  const hello = () => {
    socket.emit("hello", { msg: "hello" });
  };
  const study = () => {
    socket.emit("study", { msg: "study" });
  };
  const bye = () => {
    socket.emit("bye", { msg: "bye" });
  };

  const result = useRef(null);

  return (
    <>
      <h3>소켓 실습 1</h3>
      <button onClick={hello}>hello</button>
      <button onClick={study}>study</button>
      <button onClick={bye}>bye</button>
      <p ref={result}></p>
    </>
  );
}


