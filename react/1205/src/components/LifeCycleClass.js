import { Component } from "react"

class LifeCycleClass extends Component {

  state={text:""}

  // 1. 컴포넌트가 마운트 될때
  componentDidMount(){
    console.log("class component: ⭕mount")    
  }

  // 2. 컴포넌트가 업데이트 될때
    componentDidUpdate(){
    console.log("class component:  ✅update")
  }

  // 3. 컴포넌트가 언마운트 될때
  componentWillUnmount(){
    console.log("class component: ❌unmount")
  }

  // 4. text state가 변경될 때 마가  if문안에 있는 코드를 실행시킴
  // (이 전props,이 전satate)직전의
  componentDidUpdate(prevProps, prevState){
    if(prevState.text != this.state.text ){
      console.log("class component: ✅ ✅ text update")
    }
  }


  render() {
    return(
      <>
      <h2> 클래스형 컴포넌트 LifeCycle 공부</h2>
     <div> number : {this.props.number} </div>
     <input 
     type="text" 
     value={this.state.text} 
     onChange={(e)=>this.setState({text: e.target.value})}
     />
      </>
    )
  }
}

export default LifeCycleClass