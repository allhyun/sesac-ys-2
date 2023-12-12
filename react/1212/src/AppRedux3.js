import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increase , decrease } from "./store/counterReducer";
import { Boxe1Container } from "./containers/BoxesContainer";


// containers 폴더
// redux store 에 직접적으로 접근하는 컴포넌트를 모아두기 위해서


// components폴더 
// 보통 presentational 컴포넌트 만 저장.
// reduxstore에 직접적으로 접근하지않는 컴포넌트만 모아둠.

function AppRedux3() {
  return (
    <div>
      <Boxe1Container />
    </div>
  );
}


// function Box4() {
//   const number = useSelector((state)=>state.counter.number);
//   const isData =useSelector((state)=> state.isData);
  
//   const dispatch=useDispatch();
//   return (
//   <div className="box">
//     <h3>number: {number}</h3>
//   <button onClick={()=>dispatch({type: 'INCREMENT'})}>plus</button>
//   <button onClick={()=>dispatch({type: 'DECREMENT'})}>minus</button>


//   <button onClick={()=>dispatch(increase())}>plus</button>
//   <button onClick={()=>dispatch(decrease())}>minus</button>

//   <div> 
//     {/* isDataReducer.js에서 불러오는것..? index.js도!<store>안에서 */}
//     isData {`${isData}`}
//     <button onClick={()=>dispatch({type: 'CHANGE'})}>변경</button>


//   </div>
//   </div>
// );
// }



export default AppRedux3;