// generic
// 기본적으로 선언할 때 type을 지정해주는데,
// 사용하다보면, 다양한 타입에 대해서 처리를 해줘야할 수 있음.

function printXY (x: number,y:number):void;
function printXY (x: string,y:string):void;

function printXY (x: number | string | object ,y:number| string| object){
  console.log(x,y)
}

printXY(1,2)
printXY("A","B")
// printXY("A", 2)

// 호출하거나 사용할 때 타입을 넘겨서 해당 타입으로 지정할 수 있는 방법(GERNERINC이용)
function printXYByGeneric<T>(x:T, y:T){
  console.log(x,y);

}
// <string>으로 넘겼으면 무조건 문자열만..
printXYByGeneric<string>("a","b")
// printXYByGeneric<string>(1,2) ->오류코드
printXYByGeneric<number>(1,2)



// 함수 선언문
// function numArrLength (arr: number[]):number {
//   return arr.length

// }

// 함수 표현식
const numArrLength =(arr: number[])=>arr.length

function numStrLength (arr: string[]):number {
  return arr.length

}
// 만약? 객체배열, 이외의 다른 타입의 배열도 length를 구하는 함수를 만들고 싶다면,?
// 위에 두 함수를 generic 이용하기
function arrLength<T>(arr:T[]):number{
  return arr.length;

}

// 예시 호출
arrLength<string>(["a","b"])
// arrLength<string>([1,"b"])//오류남

function exampleGeneric<T,U>(x:T,y:U){
  console.log(x,y)
}
exampleGeneric<string,number>("a",1)
let a: string[]
let b:Array<string>

interface Phone<T> {
  company: string;
  model: string;
  option: T;
}

interface SamsungOption {
  a: string;
  b: number;
}

const samsung23: Phone<SamsungOption> = {
  company: "samsung",
  model: "samsung S23",
  option: {
    a: "aaaa",
    b: 123,
  },
};

interface IphonOption {
  a: string;
  c: number;
}

const ipone15: Phone<IphonOption> = {
  company: "apple",
  model: "iphone 15",
  option: {
    a: "aaaa",
    c: 456,
  },
};


// generic 실습 1
function arrElement<T>(arr:T[],index:number){
  return arr[index]
}

console.log(arrElement<string>(["a"],0))

// generic 실습 2
function arrElement2<T>(arr:T[],index:number) {
  if(arr.length<=index) return false;
}

console.log(arrElement2<string>(['a'], 1));