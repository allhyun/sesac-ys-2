import {useReducer,useCallback, useState} from "react"

// 유틸리티한 함수,.,.,.?
const initialValue = { value : 0};
// 첫번째 변수로  이전의state, 두번째 매개변수를 액션을 담는다.
const reducer = (prevState, action ) => {
  switch(action.type) {
    case 'PLUS' :
      return {value : prevState.value+1}
    case 'MINUS' :
      return { value: prevState.value-1};
    case "RESET":
      return initialValue;
    case "MULTIFLY":
     return { value: prevState.value* action.number};
    case "DIVISION":
     return { value: prevState.value/ action.number};   
    default :
     return {value: prevState.value};
  }

  // 만약에 액션의 타입이 플러스이다 그러면 +1을 하겠다..?
  // 객체일경우 위에코드는..

}
export default function UseReducerEx(){
 //  state 작성부분: 원하는 변수명
  //  dispatch 작성부분 : 액션을 발생시키는 함수
  // reducer: 실질적으로 상태를 업데이트하는 함수
  // 코드가 복잡해질때 reducer을 사용하는게 좋다
  const [state,dispatch] = useReducer(reducer,initialValue)
  const [number, setNumber] =useState(0)

  const handleChangeNumber= useCallback((e)=> setNumber(e.target.value),[])
// dispatch 에서는 UseReducer(reducer,initialValue) 를 실행시킨다
  const plus = () => dispatch({type : "PLUS"})

  const minus = () => dispatch({type : "MINUS"})
  const reset = () => dispatch({type : "RESET"})
  const multifly = () => dispatch({type : "MULTIFLY",number: number})
  const division = () => dispatch({type:  "DIVISION",number: number})





// useState 사용하는 경우
// 밑에 코드는 + - 초기화하고있지만,

  // const [state, setState]=useState(initialValue);
  // const plus = () => {
  //   setState({value:state.value +1});
  // }
  // const minus = () => {
  //   setState({value:state.value-1});
  // }
  // const reset = () => {
  //   setState(initialValue);
  // }


// 만약에 곱하기 나누기 등등 더 많은 연산을 이용한다면?
// 또 컴포넌트 자체가 복잡해져서 코드가 길어진다면?
// state의 변화를 추적하고싶은 코드 => setState를 하나하나 찾아가면서 +1도 되는구나...-1도 되는구나..
// 알게되었을때 
// reducer을 사용한다면, reducer함수만 읽으면,+1 -1 등 해당 동작의 내용을 확실하게 알 수 있게 된다.



  return(
    <>
    <h3>useReducer 공부</h3>
    <div>
      {state.value}
      <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button>
      <button onClick={reset}>reset</button>
      <input type="number" value={number} onChange={handleChangeNumber}/>
      <button onClick={multifly}>곱하기</button>
      <button onClick={division}>나누기</button>
    </div>

    </>
  )
};