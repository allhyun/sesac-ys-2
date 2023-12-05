import { useState } from "react";

import './App.css';
import LifeCycle from './components/LifeCycleFunction';
import LifeCycleClass from "./components/LifeCycleClass";

function App() {
  const [number,setNumber] = useState(0)

  const [isShow,setIsShow] = useState(true)
  return (
    <div>
      {/* 함수형 */}
      <button onClick = {()=>setNumber(number +1)}>plus</button>
      {/* <LifeCycle number={number}/> */}

      {/* true일 경우 False 나타내기 false일경우 true나타내기 <!는 반대를 의미함> */}
      <button onClick = {()=>setIsShow(!isShow)}>off</button>      
      {isShow? "off":"on"}

      {/* 언마운트될때..? */}
      {/* { isShow && <LifeCycle number={number}/>} */}
  
     {/* 클래스향 */}
      <LifeCycleClass number={number}/>
      { isShow && <LifeCycleClass number={number}/>}


    </div>
  );
}

export default App;
