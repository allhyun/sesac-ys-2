import {Component} from "react";

class EventClass extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msg : "안녕하세요?",
    }
    // 함수 선언물을 사용하여 메소드를 만들때
    // 메소드 내부에서 클래스의 this를 사용하고 싶을 경우, 생성자 내에서 this를 bind 해주는 작업을 거쳐야함
    this.handleOnClick = this.handleOnClick.bind(this);

    // 함수 선언문을 이용하여 선언된 메소드는 this 객체를 직접 바인딩 해줘야지
    // handleOnClick 내부에서 클래스를 가리키고 있는 this를 사용할 수 있따.
  }

  // handleOnClick = () => {}
  // 함수 선언문을 사용하여 메소드를 정의
  // 함수 내부에서 자체적인 this를 만들 수 있고, this가 클래스의 this가 아니게 됨.
  // 해결법1. 생성자 내부에서 클래스를 가리키고 있는 this를 사용할 수 있다.
  // 해결법2. 함수 표현식을 사용한다.
  // 함수 선언문은 동적 바인딩을 하기때문에 함수가 사용될 때 this가 결정된다.
  handleOnClick(){
    console.log(this); // 얘 자체적으로 this를 만들고있다
    this.setState({msg:"잘가~~"});
  }


  //함수 표현식은 함수가 선언될 때 this를 결정 지음.함수를 선언하는 코드를 읽을때 this가 결정됨.
  // this
    handleOnClickHello = () => {
      console.log(this) // this 부모요소를 가져온다
      this.setState({msg:"반가워~~"});
    }
  render() {
    return (
      <>
       <h3>클래스형 컴포넌트 event 핸들링 공부</h3>
       {this.state.msg}
       {/* <button onClick={()=>{}}> */}
       <button onClick={this.handleOnClick}>
        잘가
       </button>
       <button onClick={this.handleOnClickHello}>
        반가웡
       </button>




      {/* e는 리액트 합성 이벤트 객체. 합성이벤트에 대한 모든 정보를 담고있다.
      그 중에 target이라는 거에 접근하면, 이벤트가 걸린 태그를 확인 할 수 있음 */}
       <button onClick={(e)=>{
        console.log(e)
        console.log(e.target);
        console.log(e.type);

       }}>test</button>
      </>
    )
  }
}

export default EventClass;