// export default FuncComponent = () =>
// {
//   return<div>
//     Funtional component 입니다
//   </div>
// }
//위에꺼 왜 안될까?

//const FuntionComponent = () => {
  // return <div> 함수형 컴포넌트 입니다 </div>
// }
// export default FuncComponent;

import image from "./react-logo.png"

function FuncComponent () {
  const text ="hello";
  const name ="dahyun";


  const ifrenderTest = () => {
    if(name ==="dahyun"){
      return "안녕하세요"
    }else if (name==="lily"){
      return "반갑습니다"
    }else {
      return "누구세요?"
    }
  }

  // if(조건1 && 조건2 ) 조건1이 true일 경우 조건2를 읽겠다

  const style = { fontSize: "20px", color: "red" };

  const nicname = "댕댕"
  const animal = "강아지"

  
 return (
  <>
  {/* {1. 하나의 태그로 감싸서 return} */}
  <div> 1.함수형 컴포넌트 입니다 </div>
  <div> 2.함수형 컴포넌트 입니다 </div>

   {/*2. js 문법 사용 사용 가능(변수) */} 
   <h3>안녕하세용 {text} </h3>
   {/* 2. js 문법 사용 가능 (삼항연산자를 조건에 따른 렌더링 <간단한거만 가능>) */}
   <h4>{name === "dahyun" ? "안녕하세요?" : "뉘신지?"}</h4>
   {/* 조건 ? "true일떄" : " false 일때" */}
   {/* 2-1. 복잡한 조건을 이용하고 싶다면 -> 위에서 함수로 만들어서 사용 */}
   <h4>{ifrenderTest}</h4>

   {/* 2-2. 조건에 따른 렌더링 (논리연산자 &&) */}
   <h5>{name === "dahyun" && "안녕하세요?" }</h5>

   {/* 3. inline style 적용방법-> style 속성값으로 객체를 전달한다 <객체는 중괄호에 담겨있으니까 중괄호 두번써야하는것임> */}
   {/* <div style="font-size : 20px"></div>   기존 방법*/}
   <div style={{fontSize : '20px', color : 'red' }}>hello</div>
   <div style={style}>hello</div>

   {/* class와  onclick을 jsx에서 사용하기 */}
   {/* <div class = "" onclick ="함수();" > 원래 html에서 하던 방식 */}
   <div className="test-css">jsx에서 css사용하기(className) </div>
   {/* html에서는 함수를 호출했었음!jsx에서는 함수를 선언! */}
   <button onClick={()=>{
    console.log("hello")
   }}>
    버튼
   </button>

   {/* 5. 종료태그필수! */}
   <br/>
   {/* '/' 경로가 public폴더 안이다 */}
   <img src ="/logo192.png"/>

   {/* src내부의 이미지를 사용할 경우 ->위에서 이미지를 import해오기 */}

   <img src ={image}/>


   <h2>제 미래의 반려동물 이름은 {nicname}입니다</h2>
   <h2>{nicname}이는{animal}입니다</h2>
  </>

 )
}



// 두개의 내용을 담고 싶을때는 
// function FuncComponent () {
//   return(
//   <div>
//     <div> 1.함수형 컴포넌트 입니다 </div>
//     <div> 2.함수형 컴포넌트 입니다 </div>
//   </div>
// ) 
//  }

export default FuncComponent;