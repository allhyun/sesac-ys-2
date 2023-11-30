import { useState } from "react";

function PrecStateFunction () {
  const [number, increase]=useState(0);
  const [text,decrease] =useState(0);
  return(
  <>
  <h3>실습2</h3>
  <div>
    실습2 +1증가 {number}{""}
    <button onClick={()=>{
      increase((prevNumber)=>prevNumber +1);
      }}>+1</button>
    </div>
    <div>
    실습2 -2감소 {text}{""}
    <button onClick={()=>{
      decrease((prevNumber)=>prevNumber -1);
      decrease((prevNumber)=>prevNumber -1);
      }}>-2</button>
    </div>
  </>
  );
}

export default PrecStateFunction;