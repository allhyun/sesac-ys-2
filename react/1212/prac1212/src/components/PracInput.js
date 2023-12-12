import {InputContainer} from "../containers/InputContainer"
import { useState } from "react";

export function Input1(){
  return(
    <div className="box">
      {/* <h3>잔액: {number}</h3> */}
      <InputContainer />
    </div>
  )
}

export function Input4(props) {
  const { number, isData, counterIncrease, counterDecrease, isDataChange } =
    props;
    const [inputValue, setInputValue]=useState(0);
    const handleInput =(e)=>{
      setInputValue(Number(e.target.value))
    }
  return (
    <div className="box">
      <h3>잔액: {number} 원</h3>
      <input type="number" value={inputValue} onChange={handleInput}/>
      <button onClick={counterIncrease}>입금</button>
      <button onClick={counterDecrease}>출금</button>
    </div>
  );
}
