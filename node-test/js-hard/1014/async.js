//오류나는 코드
// function goMart(){
//     console.log('마트에 가서 어떤 음료를 살지 고민한다.');

// }
// let product;
// let price;

// function pickDrink(callback){
//     setTimeout(function(){
//         console.log('고민 끝!!');
//         product = '제로콜라';
//         price =2000;
//     }, 3000);
// }

// function pay(product, price){
//     console.log(`상품명: ${product},가격: ${price}`);
// }

// goMart();
// pickDrink();
// pay(product,price);




//해결코드(콜백함수)
// function goMart(){
//     console.log('마트에 가서 어떤 음료를 살지 고민한다.');

// }
// let product;
// let price;

// function pickDrink(callback){
//     setTimeout(function(){
//         console.log('고민 끝!!');
//         product = '제로콜라';
//         price =2000;
//         callback(product, price);
//         //pay(product, price);
//     }, 3000);
// }

// function pay(product, price){
//     console.log(`상품명: ${product},가격: ${price}`);
// }

// goMart();
// pickDrink(pay);
// //pay(product,price);

//promise로 해결한 코드
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

// goMart();
// pickDrink().then(() => {
//  pay(product,price);}
// );

async function exec() {
    goMart();
 pickDrink();
 pay(product,price);
}
exec();

