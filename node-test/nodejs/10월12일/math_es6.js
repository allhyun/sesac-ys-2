const add = (a, b) => a + b;//중괄호없이 작성시 리턴한다!
const minus = (a, b) => a - b;
const pi = 3.14;

//1) 하나만 내보낼 경우
//module.exports = add //아래코드와 같음.
export default add; //es6문법이며 위에코드와 동일한 코드이다.
//2)여러개를 내보낼 경우 
//module.exports = {
//add,
//minus
//}//노드모듈코드

// //export default pi; //default가 있어야 내보내진다.
// export {add, minus};