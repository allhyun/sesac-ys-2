import { useState } from "react";

const [a,b,c] = ["aaa","bbb","ccc"]
console.log(a) //aaa
console.log(b) //bbb 

function StateFunction () {
  //useState는 배열을 반환 -> 그 배열을 구조분해하여 number와setNumber 선언
  // [state 변수,state를 변경시키는 함수] =usestate(state 초기값)를 return한다.
  const [number, setNumber]=useState(0);
  const [text,setText] =useState("hello")
  return(
  <>
  <h3>함수형 컴포넌트 state 공부</h3>
  <div>
    number state value {number}{""}
    <button onClick={()=>{
      // 아래코드는 비동기 코드 즉, +2씩 진행되지 않음.
      // setNumber(number+1)
      // setNumber(number+1)

      setNumber((prevNumber)=>prevNumber +1);
      setNumber((prevNumber)=>prevNumber +1);
      }}>+2</button>
    </div>
    <div>{text}</div>
  </>
  );
}

export default StateFunction;