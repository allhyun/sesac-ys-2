import {Component} from "react";

class HandlerEX extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msg : "hello world?",
    }
    this.HandleOnclick = this.HandleOnclick.bind(this);

  }
  HandleOnclick(){
    this.setState({ msg : "goodbye world"})

  }
  render(){
    return(
      <>
      <h3> 실습 3</h3>
      {this.state.msg}
      <button onClick={this.HandleOnclick}>클릭</button>
      </>
    )
  }

}
export default HandlerEX;