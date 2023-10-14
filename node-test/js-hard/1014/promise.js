//promise 기본예시
// function promise1(flag){
//     return new Promise(function(resolve, reject){
//         if (flag){
//             resolve('promise 상태는 fulfilled!! then으로 연결됩니다')
//         } else {
//             reject('promise 상태는 rejected!!  catch로 연결됩니다.')
//         }
//     })
// }

// //특정 함수가 return하는 값이 promide 객체일경우, 
// promise1(true).then(() => {err});
// //result에는 resolve로 보낸 인자값이 들어오게 된다
// //여기서는 `fulfilled!! then으로 연결됩니다
// console.log(result);
//chaining으로 then, catch라는 메소드
// .catch((err)=>{
//     console.log(err);
// })

//----------콜백지옥예시

function add(n1, n2, cb) {
    setTimeout(function () {
      let result = n1 + n2;
      cb(result);
    }, 1000);
  }
  
  function mul(n, cb) {
    setTimeout(function () {
      let result = n * 2;
      cb(result);
    }, 700);
  }
  
  function sub(n, cb) {
    setTimeout(function () {
      let result = n - 1;
      cb(result);
    }, 500);
  }
  
  add(4, 3, function (x) {
    console.log("1: ", x);
    mul(x, function (y) {
      console.log("2: ", y);
      sub(y, function (z) {
        console.log("3: ", z);
      });
    });
  });

  //---------promise로 변경
  function add(n1, n2) {
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
  
  add(4, 3).then((result)=>{
    console.log("1: ", result);
    return mul(result);
  })
   .then((result)=>{
    console.log("2:", result);
    return sub(result);
   }) 
   .then((result)=>{
    console.log("3:",result)
   })
   .catch((err) => {
    console.log(err);
})