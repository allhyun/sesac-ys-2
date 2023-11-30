import { Component } from "react";

class StateClass extends Component {

  // 옛날방식
  // constructor() {
  //   super()
  // }


  render() {
    return (
    <>
    <div>props 예시{this.props.name}</div>
    <h3> 클래스형 컴포넌트 state 공부</h3>
    </>
    );
  }
}

export default StateClass;