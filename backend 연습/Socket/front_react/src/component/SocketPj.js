import io from "socket.io-client";
import {useEffect,useState} from "react"
import "../styles/chat.css"

const socket = io.connect("http://localhost:8000", { autoConnect : false});



const chat = ({chat}) => (
<div className={`list ${chat.type}-chat`}>
      <div className="content">{chat.content}</div>
    </div>
);

const notice =({chat}) => (
  <div className="list notice">{chat.content}</div>
)

export default function Prac1() {
  const [msgInput,setMsgInput]=useState("")
  const [userIdInput,setUserIdInput]=useState("")
  const [chatList,setChatList]=useState([{
    type: "my",
    content: "안녕?",
  },
  {
    type: "other",
    content: "응 안녕?",
  },
  {
    type: "notice",
    content: "~~~~~~님이 입장하셨습니다.",
  },])
  const [userId, setUserId]=useState(null)
  const initSocketConnect= () => {
    console.log("connected",socket.connected)
    if(!socket.connected) socket.connect()
  }



  useEffect(()=>{
    const noticeEvent = (res) =>{

      const newChatList =[...chatList,{type:"notice",content:res.msg}]


      setChatList(newChatList)
    } 

    socket.on("notice",noticeEvent)
  },[chatList]);

  const sendMsg = () => {initSocketConnect();};


  return(
   <>
   <h3>채팅창입니다</h3>

   <div>{userId} 반가워요!!</div>

   <div className="chat-box">
   {chatList.map((chat, i) => {
          if (chat.type === "notice") return notice=(key={i} chat={chat});
          else return chat=( key={i} chat={chat}) ;
        })}
    </div>


   <div className="inpot-box">
    <input
    type="text"
    value={msgInput}
    onChange={(e) => setMsgInput(e.target.value)}
    />
    <button onClick={sendMsg}>전송</button>

   </div>

   </>
  )
}