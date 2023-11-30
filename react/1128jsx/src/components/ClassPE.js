import {Component} from "react"
import PropTypes from "prop-types"

class ClassPE extends Component {
  render (){
    return (
      <>
       <div> 클래스형 컴포넌트를 이용 (Props)</div>
       <div>
        오늘은 {this.props.text} {this.props.valid}
       </div>
      </>
    )
  }

  //static 정적 변수 ->객체를 만들지않아도 사용이 가능함
  // 모든 객체가 하나의 변수를 사용하는 것.
  // 정적 속성 (변수,메소드) ->모든 객체가 같은 공간을 바라본다
  // 유틸리티적인 성향
  // static defaultProps = {
  //   name:"코딩온"
  // }

  // static propTyes = {
  //   title : PropTypes.string,
  //  content : PropTypes.string.isRequired,
  //   number : PropTypes.number
  // }
};

ClassPE.defaultProps = {
  text : "코딩온",
};

ClassPE.propTypes = {
  title : PropTypes.string,
  content : PropTypes.string.isRequired,
  number : PropTypes.number
}


export default ClassPE;

