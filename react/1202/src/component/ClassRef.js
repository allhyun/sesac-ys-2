import {Component,createRef} from "react"

class ClassRef extends Component {
input2 =createRef();




focusInput = () => {
  this.input.focus();
}

focusInput2 = () => {
  this.input2.current.focus();

}
  render(){
    return(
      <>
       {/* 속성을 지정해주고 속성의 값을 함수로 넘긴다.
    함수로 받으면 첫번째 매개변수가 넘어온다 */}
      <input type="text"
      ref={(ref => {
        // ref에 콜백함수를 넘길 때 첫번째 매개변수는
        // ref 걸려있는 요소를 담고있다.
        this.input =ref;
      })} />
      {/* // ref에 콜백함수를 넘길 때 첫번째 매개변수는
        // ref걸려있는 */}
      <button type="button " onClick={this.focusInput}>버튼</button>




      <input type="text"
      ref={this.input2} />
      <button type="button " onClick={this.focusInput2}>버튼</button>
      </>
    )
  }
}

export default ClassRef;