import PropTypes from "prop-types"

import image from "./react-logo.png"
function FunctionPE({ title , author, price, type }){
  return(
  // default 실습
    // function FuncPropsEx(props){
    //   return(
      <>
       <div>이번주베스트셀러</div>
       <div> {title}</div>
       <img src ={image}/>

       <div> 저자 {author}</div>
       <div> 판매가 {price}</div>
       <div> 구분 {type}</div>


      </>
      )
    }


FunctionPE.prototype = {
  title : PropTypes.string,
  author : PropTypes.string.isRequired,
  price : PropTypes.number,
  type : PropTypes.number
}

export default FunctionPE;