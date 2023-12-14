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

// type으로도 사용

type ProductInfo3 = {
  productName : string,
  price: number
}