import {Component} from "react"
import PropTypes from "prop-types"


// class는 객체를 만들기위한 틀
// 클래스를 이용해서 객체를 만들 수 있다.
// 객체를 만들면, 각 객체가 다른 메모리를 할당한다.
//객체 내의 일반 속성은 객체 별로 다른공간을 차지함.

class ClassPropsEx extends Component {
  render (){
    return (
      <>
       <div> 클래스형 컴포넌트를 이용 (Props)</div>
       <div>
        제목은 {this.props.title}, 내용은 {this.props.content}, 숫자는 {}
         {this.props.number}
       </div>
      </>
    )
  }

  //static 정적 변수 ->객체를 만들지않아도 사용이 가능함
  // 모든 객체가 하나의 변수를 사용하는 것.
  // 정적 속성 (변수,메소드) ->모든 객체가 같은 공간을 바라본다
  // 유틸리티적인 성향
  static defaultProps = {
    name:"코딩온"
  }

  static propTyes = {
    title : PropTypes.string,
   content : PropTypes.string.isRequired,
    number : PropTypes.number
  }
};

// ClassPropsEx.defaultProps = {
//   title : "코딩온",
// };

// ClassPropsEx.propTypes = {
//   title : PropTypes.string,
//   content : PropTypes.string.isRequired,
//   number : PropTypes.number
// }


export default ClassPropsEx;

