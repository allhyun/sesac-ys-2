const fruits = ["apple", "banana", "grape"];


//배열 구조분해는 [] 객체 구조분해는 {}
const [apple2, banana2 = "banana2", grape2 ,strawberry ="strawberry"] = fruits;
console.log(apple2, strawberry, banana2 );


// 사실상 아래 코드와 동일한 작업을 하고있음
//const apple2= fruits[0];
//const banana2= fruits[1];
//const grape2= fruits[2];

let x = 1, y=3;
[x,y] = [y,x];
//위에 치환하는 코드랑 밑에랑 같은내용 이다.
//    let temp= x; // temp = 1
//   x=y // x=3 y=3
//    //y=x // y=3
//    y=temp;

console.log(x,y);



const obj = {
    name:"dada",
    gender:"여",
    age: 30,

};

//const { age, name, test = "test" } =obj;
//console.log(age, test);

const { age, name : name2} = obj;
console.log(age,name2);

//const { age : age2 변수명을 바꾸고싶으면 콜론쓰자, name : name2} = obj;


//spread연산자
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c", "d", "e"];

//[1,2,3,4,5,"a", "b", "c", "d", "e"] 로 만들고싶음!
//const arr3 = [arr1[0]~~~~, arr2[0], arr2[1], ~~~]
//for문 이용
const arr3 =[...arr1, ...arr2];
console.log("arr3", arr3);

//...[1,2,3,4,5] => 1,2,3,4,5
const hello = [..."hello"]
//hello = ["h","e","l","l","o"]
console.log("hello", hello);
