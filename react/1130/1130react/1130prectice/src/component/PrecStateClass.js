import { Component } from "react";

class PrecStateClass extends Component {

    state = {
      number : 0,
      number1:0,
      test:"hello"
    }

  render() {
    return (
    <>
    <div>실습{this.props.name}</div>
    <h3> 실습1 </h3>
    <div>
      실습1 +2증가 {this.state.number}
      <button onClick ={() => {
        this.setState((prevState)=>{return{number: prevState.number +1}});
        this.setState((prevState)=>{return{number: prevState.number +1}});
      }}> +2</button>
     </div>
     <div>
      실습1 -1감소 {this.state.number1}
      <button onClick ={() => {
        this.setState((prevState)=>{return{number1: prevState.number1 -1}});
      }}> -1</button>
     </div>

    </> 
    );
  }
}

export default PrecStateClass;