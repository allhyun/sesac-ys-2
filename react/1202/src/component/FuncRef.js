import { useRef } from "react";

function FuncRef() {
 const input = useRef();

//  로컬변수
//  const localVar = 0;
 const localVar =useRef(0);

 const focusinput = () => {
  input.current.focus();

 }

 const plusLocalVar=()=> {
  localVar.current ++;

 }

 
 return (
    <>
      <input type="text" ref={input} />
      <button type="button" onClick={(focusinput)}>버튼</button>



      <div>{localVar.current}</div>
      <button type="button" onClick={(plusLocalVar)}>버튼</button>
    </>
  );
}

export default FuncRef;