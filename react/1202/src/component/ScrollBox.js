import { useRef } from "react"


function ScrollBox (){
  const box =useRef();

  const scrollTop = () => {
    box.current.scrollTop = 0;
  };

  return(
    <>
    <div className="scroll-box" ref={box}>
      <h1>hello</h1>
      <h1>dahyun</h1>
      <h1>hello</h1>
      <h1>dahyun</h1>
      <h1>hello</h1>
      <h1>dahyun</h1>
      <h1>hello</h1>
      <h1>dahyun</h1>


    </div>

    <button onClick={scrollTop}>ddd</button>
    </>
  )

}

export default ScrollBox;


// import { useRef } from "react";

// function ScrollBox() {
//   const box = useRef();
//   const srollTop = () => {
//     box.current.scrollTop = 0;
//   };
//   return (
//     <>
//       <div className="scroll-box" ref={box}>
//         <h1>hello</h1>
//         <h1>lily</h1>
//         <h1>lily</h1>
//         <h1>lily</h1>
//         <h1>lily</h1>
//         <h1>lily</h1>
//         <h1>lily</h1>
//       </div>
//       <button onClick={srollTop}>위로</button>
//     </>
//   );
// }

// export default ScrollBox;