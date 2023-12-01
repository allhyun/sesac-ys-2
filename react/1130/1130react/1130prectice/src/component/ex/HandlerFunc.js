import {useState} from "react";

function HandlerFunc() {
  const [msg,setMsg] =useState("검정색글씨");
  const [color, setColor] = useState("black")



  const changeColorRed = () => {
    setColor("red")
    setMsg("빨간색")
  }
  const changeColorBlue = () => {
    setColor("blue")
    setMsg("파란색")
  }

  const [text,setText] =useState("안녕하세요");
  const [but, setBut] = useState("사라져라");
  const handleOnClick = () =>{
    if(text === "안녕하세요"){
      setText("");
      setBut("보여라");
    }else{
      setText("안녕하세요");
      setBut("사라져라")
    }
  }


    const [img,setImg] =useState("강아지");
    const [bgColor, setbgColor] = useState("");
    const [Color, setFColor] = useState("black")
    const [input, setINput] = useState("")
    const HandlebgColor = (e)=> {
      setbgColor(e.target.value)
    }
    const HandleFColor = (e)=> {
      setFColor(e.target.value)
    }
    const HandleInput = (e)=> {
      setINput(e.target.value)
    }


 
  return(
    <>
    <h3>이벤트핸들러 실습2</h3>
    <h3 style={{color : color }}>{msg}</h3>
    <button onClick={changeColorRed}>빨간색</button>
    <button onClick={changeColorBlue}>파란색</button>


    <h3>이벤트핸들러 실습3</h3>
    {text}
    <button onClick={handleOnClick}>{but}</button>

    <h3>이벤트핸들러 실습4</h3>
    과일:
    <select name="amimal" onChange={(e) => setImg(e.target.value)}>
     <option value="강아지" >강아지</option>
     <option value="고양이">고양이</option>
     <option value="멍멍이">멍멍이</option>
     <option value="냥냥이">냥냥이</option>
    </select>
    배경색:
    <select name="bgcolor" onChange={HandlebgColor}>
     <option value="white">흰색</option>
     <option value="blue">파란색</option>
     <option value="black">검정색</option>
     <option value="yellow">노란색</option>
    </select>
    글자색:
    <select name="Fcolor" onChange={HandleFColor}>
     <option value="white">흰색</option>
     <option value="blue">파란색</option>
     <option value="black">검정색</option>
     <option value="yellow">노란색</option>
    </select>
    <br/>
    내용:
    <input type="text" onChange={HandleInput}/>
    <div
        style={{
          backgroundColor: bgColor,
          color: Color,
          width: "100px",
          height: "20px",
          display: "inline-block",
        }}
        >
        {input}
      </div>
    <div>
      <img src={`/${img}.jpeg`} alt={img}/>
    </div>


    </>

    
  )
}
  export default HandlerFunc;

