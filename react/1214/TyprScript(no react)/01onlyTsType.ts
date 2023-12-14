//or
type gender = "Men"|"Women";

// const lily : gender = "abcd"
const dahyun : gender = "Women"


// [상품명, 가격]
type productInfo = [string, number]
const cola : productInfo =["cola",2500];


// 객체에 대한 타입을 지정할 경우 interface 사용
interface ProductInfo2 {
  productName : string,
  price: number
}

const cider : ProductInfo2 = { productName : "cider", price:2500,}
// const cider : ProductInfo2 = { productName : "cider", price:2500,sale :10}


// type으로도 사용
// 있어도되고 없어도 되는 키값이 있다면 물음표사용

type ProductInfo3 = {
  productName : string,
  price: number,
  sale? :number
}

const beer : ProductInfo3 = {productName:"cider",price:2500,sale:10}
console.log(beer.sale);
// undifined 뜰것임..




interface Seller {
  name: string ;
}
  interface ProductInfo4  {
  productName : string,
  price: number;
  sale? : object;
  seller?:Seller;
}

const soju : ProductInfo4 = {
  productName:"soju",
  price: 2000,
  seller:{name:"lily"}
}

// console.log(soju.seller.name);
// soj.seller -> seller는 optional한 key ->undifined가 될 수 있음
// undefined에는 aaa함수 or 속성이 없습니다.

console.log(soju.seller?.name);
// name의 값을 출력하려면 ?...ㅅ용해얗암..?
// optional 체이닝




interface Person{
  name: string
  age: number
}

interface Student extends Person{
  studentId: string;
  eat:() => void;

  // 함수에 리턴값이 없을 때 , void를 지정한다 < void를 리턴한다 > 로 생각하면 된다.
// 매개변수가 있다 하면 (aaa)이런식으로 담아준다..??

}

const person: Person = {name:"dahyun", age:95}
const sru: Student={
  name:"dahyun", 
  age:95,
  studentId:"00000",
  eat: ()=> console.log("밥을 먹는다")
}



interface Game{
  title: string,
  price: number,
  desc?: string,
  category: string,
  platform: string,
}

const heroGame_a : Game = {
  title: 'DC 언체인드',
  price: 50000,
  desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
  category: '액션',
  platform: '모바일'
}

const heroGame_B: Game = {
  title: 'MARVEL 퓨처파이트',
  price: 65000,
  category: '롤플레잉',
  platform: '모바일',
}