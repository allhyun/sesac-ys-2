import Input4 from '../components/PracInput'
const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'


export const increase = () => ({type: INCREMENT})
export const decrease = () => ({type: DECREMENT})


const initialValue = {number:0}

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