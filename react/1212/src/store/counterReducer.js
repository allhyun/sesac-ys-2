const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'

// 액션을 리턴한다.<구조화>
// 발생할 수 있는 action을 return하는 함수.
// 왜 만들었나? 액션타입의 이름이 변경될 경우, 액션을 발생시키는 (즉,dispatch를 사용한 곳)모든 곳에서 
// action.type을 다 변경해 줘야함. 이를 해결하기 위해 만든 함수코드입니당 (외부에서 사용하려고!<AppRedux2.js>에서 사용..) 
export const increase = () => ({type: INCREMENT})
export const decrease = () => ({type: DECREMENT})


const initialValue = {number:100}

const counterReducer = (state= initialValue, action) => {
  switch(action.type){
    case 'INCREMENT': //INCREMENT 상수 선언 전 ver3
    case INCREMENT :  //INCREMENT 상수 선언 후 ver3-1

    // switch문에서는 case 여러번 사용 가능..?

    return { number : state.number+1}

    case 'DECREMENT':
    case  DECREMENT :
    return {number: state.number -1}

    default : 
    return state;
  }
}

export default counterReducer;