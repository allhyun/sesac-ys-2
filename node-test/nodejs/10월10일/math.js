const add=(a,b) => a + b;
const minus =(a,b) =>a - b;
const PI=3.14;
// const add2=(a,b) => {
//     return a+b; 
// }
//위에 두개는 완전히 같은 코드이다.
//화살표 후 함수를 정의하는 {}
//함수를 넘길거면 이름만 넘긴다


//---case1 파일에서 한개의 식별자만 내보내는 경우
//module.exports= add;


//----case 2, 3 파일에서 여러개의 식별자를 객체형태로 내보내는 경우
//여러식별자를 객체로 내보낸다.
// module.exports = {
//     add,
//     minus,
//     PI,
// };



//----case 2, 3
module.exports.add = (a, b) => a + b;
module.exports.minus = (a, b) => a - b;
module.exports.PI = 3.14;

//{
//    add,
//   minus,
//  PI,
//}; 위에 코드랑 같은내용

