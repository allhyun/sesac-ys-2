let str: string ="hello";
// str = 5;?-//errornp
console.log(str);

let num : number;
num = 5;

let undif : undefined = undefined;
// ubdif =3;
let nu: null =null;
// nu =3;

let arr : number[];
// arr는 숫자배열이 된다..
// 숫자로 이루어진 배열의 type number[]
// [1,2,3,4 등..]

let strArr: string[]=['abc','def']
let strArr2: Array<string>=['abc','def']



let numStrArr: (number| string) [] = [1,'a']
let numStrArr2: Array<number| string>= [1,'a']

let abc :  number |string ="a"

// typescrupt에서 any를 사용하는 건 지양해야한다.
let anyArr : any[] = [1,"a",null,undefined,{}]



let obj : object = {
  name:"dahyun",

}

// Tuple
let drink : [string,number]=['콜라',2500];

drink[0]="cider"
console.log(drink[0]);
// drink[2]='AAA'
drink.push("aaa")
console.log(drink);
// Tuple의 한계 위처럼 할당하는 건 오류로 잡지만, push 메소드를 이용하면 오류를 일으킴..?


let drink2: readonly[string,number]=['콜라',2500];

// drink2[0]="aaa" //error
//push 메소드를 사용할 수 없다.




let olimpic_newgame: readonly [object,boolean];

olimpic_newgame = [
  {
    name : "쇼트트랙",
    type: "혼성계쭈",
  },
  true,
]


olimpic_newgame[1]=false;





// Enum
// sun, rain, cloud...날씨..??
enum Weather {
  sun = 0,
  rain =1,
  cloud =2,
}
console.log(Weather.sun)
const weather = 0;

if (weather == Weather.sun) {
  console.log("맑은 날씨");
}

let aaaaa: Weather = 2;
// let aaaaa: Weather = 3; // error

enum Weather2 {
  sun = "sun",
  rain = "rain",
  cloud = "cloud",
}

console.log(Weather2.sun);


// 예습 : interface, type




