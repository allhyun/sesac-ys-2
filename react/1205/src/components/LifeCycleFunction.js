import { useEffect , useState } from "react";

function LifeCycle (props) {

  const {number} = props;

  // useState 사용
  const [text,setText] =useState('')

  // useEffect 사용<함수임! 함수로사용함~>구조 : useEffect(콜백함수,의존성배열<넣어도되고안넣어도됨>)
  // case1. 의존성 배열이 빈 배열일 경우.(mount시에 콜백함수 실행시킴)
  //  마운트될때란, app.js를 랜더링 되는 순간
  // 콜백함수 내부에서 return 뒤에 오는 함수를 unmount시에 실행시킴
  useEffect(()=>{
    console.log("function component: ⭕mount")
    return()=>{
      console.log("function component: ❌unmount")
    }
  },[])

    // case2. 의존성 배열을 전달하지 않을 경우
    // mount & update 시에 콜백함수를 실행시킴
    useEffect(()=>{
      console.log("function component:  ✅update")
    })

    // case3. 의존성 배열에 원소가 존재할 경우
    // 해당 원소가 update될 때마다 콜백함수를 실행시킴
    useEffect(()=>{
      console.log("function component:  ✅✅text update")
    },[text])

     // case4. app.js에서 실행중


  return(
    <>
     <h2> 함수형 컴포넌트 LifeCycle 공부</h2>
     <div> number : {number} </div>
     <input 
     type="text" 
     value={text} 
     onChange={(e)=>setText(e.target.value)}
     />
    </>
  )

  
}

export default LifeCycle;