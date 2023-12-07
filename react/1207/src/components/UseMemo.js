import {useMemo,useState} from "react";

// usememo : redering 할 때, 불필요한 연산을 방지

export default function UseMemoEx(){
  const[count,setCount]=useState(0)
  const [text, setText] = useState('')

  // [before]
  // count변수가 변경되지않아도, rendering 될때마다 다시 연산을 함
  // text state =>count가 변경될때만 연ㄴ산을 하도록 하고싶음..! =>usememo이용
  // const calc = () => {
  //   console.log("clac...",);
  //   return count*2;
  // }

  // [after]
  // useMemo(콜백함수,의존성배열) : 불필요한 연산을 방지, 이전 값을 기억함. count의 변경이 있을 때만 다시 연산하여 calc에 담음
  const calc =useMemo(()=>{
    console.log("calc......")
  },[count]);
  return (
    <>
    <h3>useMemo 공부</h3>
    <div>count:{count} <button onClick={()=> setCount(count+1)}>+1</button></div>
    <div>clac : {calc}</div>
    <input 
    type="text" 
    value={text} 
    onChange={(e)=> setText(e.target.value)}></input>
    </>
  )
}