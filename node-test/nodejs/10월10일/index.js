
//---case 1 파일에서 한개의 식별자만 내보내는 경우
//const add= require("./math.js");
//require (파일) 파일을 뿔러오겠다.
//모듈을 불러와서 그 결과를 변수에 담겠다.
//const sum = add(2,3);
//console.log(sum);


//----case 2 파일에서 여러개의 식별자를 객체형태로 내보내는 경우
// const math = require("./math.js");

// const sum = math.add(3, 5);
// console.log(sum);
// console.log(math.PI);
//1. math.js 파일을 불러온다 math 키워드를 불러온다
//2. math 키워드에 add를 불러온다 그걸 sum에 담는다


//---case 3 파일에서 여러개의 식별자를 객체를 형태로 내보내는 경우
//모듈불러올때 객체를 분해해서 가져오겠다.
//특정 식별자만 필요한 경우(add,minus) 객체구조분해 할당 문법을 통해 받아올 수 있다.
const { add, minus }=require("./math.js");
const sum = add(2,3);
console.log(sum);
//console.log(PI); //오류발생
//{}중괄호 안에 불러오고싶은 키값을 넣어서 불러와야한다.

