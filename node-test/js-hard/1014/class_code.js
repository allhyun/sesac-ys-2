class House{
  constructor(name,year){
      this.name = name;
      this.year = year;
  }
  
  
  age(){
      console.log(`이 건물은 ${new Date().getFullYear() - this.year}년 되었습니다`)
      
  }

}

const house3 = new House("freehouse",2010);
house3.age();


//클래스 상속
class Apartment extends House{ //사용할 클래스 이름 상속받을 키워드
  constructor(name, year, floor){
    // this.name =name;
    super(name, year); //부모(House)에서 사용하는 내용 호출
    // this.year = year;
    this.floor = floor;
  }

  //오버라이딩 : 부모에 있는 메소드를 그대로 자식이 다시 정의하는 것
  age(){
    super.age();
    console.log(`입주는 ${this.year +1 } 부터 시작했습니다.` );
  }
  //오버라이딩 vs 오버로딩
 }

  //오버로딩 : 똑같은 함수의 이름으로 여러개의 함수를 선언하는 것.
 //매개면수가 다르다.

const apart = new Apartment("래미안아파트",2013,25);
console.log(apart.name, apart.floor);
apart.age();

function test(a,b){
  consoleog(`a :$[a],b: ${b}`);
}

//해결하고 싶다면? 조금의 기술을 써서 하나의 솜전에 잘 실행되도록 하는 함수 생성
function test(a,b,c){
  console.log(`a :${a},b: ${b}, c:${c}`);
  return a + b+ c;
}




// class Personal {
//   constructor(){
//     //이름
//     //나이
//     //주민번호

//   }
//   //밥을 먹는다
//   //잠을잔다
  
// }

// class Student {
//   constructor(){
//     //이름
//     //나이
//     //주민번호
//     //학번

//   }
//   //밥을 먹는다
//   //잠을잔다
  
// }
// const p = new Personal();


