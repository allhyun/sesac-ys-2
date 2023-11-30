// 1. 컴포넌트 내에서 

// function FuncPropsEx(props){
  // props = {
  //   title :"SeSAC",
  //   content:"hello world",
  // };
  // 로 받아와진다.
//   return(
  
//   <>
//    <div>함수형 컴포넌트를 이용하여 Props</div>
//    <div>제목은{props.title},내용은{props.content}
//    </div>
//   </>
//   )
// }



// 2. 컴포넌트 내에서 props 매개변수 구조분해
// function FuncPropsEx(props){
//   const {title,content} = props;

// 3. 매개변수로 props를 받아올 때부터 구조분해
// function FuncPropsEx({ title , content }){
  // 설정해준 props 명을 넣어줘야한다 꼭! {}안에!

//   return(
  
//   <>
//    <div>함수형 컴포넌트를 이용하여 Props</div>
//    <div>제목은 {title},내용은 {content}
//    </div>
//   </>
//   )
// }

// 4. proptype을 이용해서 어떤 props가 넘어올지 명시 방법
import PropTypes from "prop-types"

function FuncPropsEx({ title , content, number  }){
  return(
  // default 실습
    // function FuncPropsEx(props){
    //   return(
      <>
       <div>함수형 컴포넌트를 이용하여 Props</div>
       <div>제목은 {title},내용은 {content},숫자는{number}
       </div>
      

       <br/>
       <span className="food-color">{props.food }</span> 이 제일 좋아효 


      </>
      )
    }
//title값이 없을때는 기본값으로 코딩온을 넣는다~~ Props에서 대소문자 주의주의~~
FuncPropsEx.defaultProps = {
  // title : "코딩온",
  food : "해산물"
};

// isRequired는 값이 무조건있어야한다는 내용같음! 없으면 오류가난다 이런말인듯~
FuncPropsEx.prototype = {
  title : PropTypes.string,
  content : PropTypes.string.isRequired,
  number : PropTypes.number
}

export default FuncPropsEx;