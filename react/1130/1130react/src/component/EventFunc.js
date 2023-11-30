import {useState} from "react";


function EventFunc() {
  const [msg,setMsg] =useState("hello");
  const [name, setName] = useState("")
  const handleEnter = (e) => {
    if (e.key == "Enter") {
      console.log("엔터가 눌렸습니다!");
    }
  };
  const handleonClick = (e) => {
    console.log(e.target);
    setMsg("bye")
  }

  function handleonClickHello() {
    setMsg("hello");

  }

  const handleonClickTest = (message) =>{
    setMsg(message);

  }
  return (
    <>
      <h3> 함수형 컴포넌트 event 핸들링 공부</h3>
      <div>
        {msg}

        <button onClick={handleonClick}>ㅂㅂ</button>
        <button onClick={handleonClickHello}>ㅎㅇ</button>

        
        {/* 함수에서 매개변수를 받고싶으면 어떻게 하나요? */}
        {/* 첫번째 방법 onClick에서 익명함수를 선언하고, 그 내부에서 함수를 실행시킨다. */}

        {/* <button onClick={()=>{handleonClickTest("ㅎㅇㅎㅇ")}} > test</button> */}

        {/* 두번째방법 bind를 이용한다 */}
        {/* bind의 첫번째 매개변수는 .앞에 있는 함수 (handleOnClickTest)의 this를 결정 */}
        {/* bind가 첫번째로 넘기는건 항상 실행되는 함수의 this를 담는다...즉, 두번째부터 담으면 된다~ */}
        <button onClick={handleonClickTest.bind(null , "안녕?")}>
          테스트
        </button>


      {/* input태그에서 엔터를 누르면 "엔터를 눌렀습니다!" 라는 문구가 콘솔에 찍히도록 */}
        <input
         type="text"
         value={name}
         onChange={(e) =>{
          console.log(e.target)
          setName(e.target.value)
         }}
         onKeyDown={handleEnter} />
      </div>
    </>
  )
}

export default EventFunc;