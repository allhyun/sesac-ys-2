async function add(n1, n2) {
    return new Promise((resolve,reject) =>{
        setTimeout(function () {
            let result = n1 + n2;
            resolve(result);
          }, 1000);

    })
  }
  
  function mul(n) {
    return new Promise ((resolve,reject) =>{
        setTimeout(function () {
            let result = n * 2;
    })
    let result = n * 2;
    resolve(result);
    }, 700);
  }
  
  function sub(n) {
    return new Promise((resolve,reject)  =>{
        setTimeout(function () {
            let result = n - 1;
            resolve(result);
          }, 500);
    })
  }

  //1. async 함수는 promise를 return
  //2. await 키워드는 async 함수 내부에서만 사용이 가능하다. 담고 실행이 promise가 완료될때까지 기다린다.
  async function exec(){
    const x =await add (3,4); // x=7
    console.log("1:",x);
    const y =await mul(x); // y=14
    console.log("2:",y);
    const z =await sub(y); // z=13
    console.log("3:",z);

  }

  exec();


  function goMart(){
    console.log('마트에 가서 어떤 음료를 살지 고민한다.');

}
let product;
let price;

function pickDrink(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('고민 끝!!');
            product = '제로콜라';
            price =2000;
            resolve();
        }, 3000);
    });
    }
    
function pay(product, price){
    console.log(`상품명: ${product},가격: ${price}`);
}

async function exec(){
    goMart();
    pickDrink();
    pay(product,price);
}
exec();




  //---테스트코드
  
//   async function test(){
//     console.log("test");
//     //return Promise 와 같은개념

//   }
//   console.log(test());



