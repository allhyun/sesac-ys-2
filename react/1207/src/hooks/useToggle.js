import {useState} from"react"

// 토글기능이 자주 쓰이는데 , true 일경우 false로 변경 false일경우 true 로 변경시켜
// 이에 따라 처리를 할 일이 자주 생긴다. 라고 가정
export default function useToggle(initialValue){
  // useState를 사용할 경우
  const [value,setValue]=useState(initialValue)
  const toggle =()=>{
    setValue(!value);
  }

  return[value, toggle];
}