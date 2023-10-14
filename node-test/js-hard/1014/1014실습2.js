function call(name ){
    return new Promise ((resolve,reject) => {
        setTimeout(function(){
            let result  = name;
            console.log(result);
            resolve(result);
        },1000);
    })
}
function back(){
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
            let result = "back";
            console.log(result);
            resolve(result);
        }, 1000);
    })
}

function hell(){
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
            let result = "callback hell";
            console.log(result);
            resolve(result);
        }, 1000);
    })
}

//1. 실습

// call('kim')
// .then((result)=>{
//     console.log(result, "반가워");
//     return back(result);
//   })
//    .then((result)=>{
//     console.log(result, "을 실행했구나");
//     return hell(result);
//    }) 
//    .then((result)=>{
//     console.log("여기는",result)
//    })
// })

//2. 실습
// async function exec(){
//     let user = await call("kim");
//     console.log(user, "반가워");
//     let b= await back();
//     console.log(b, "을 실행했구나");
//     let h = await hell();
//     console.log("여기는", h)
// }
// exec();


//3. 실습
function bg(color){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            document.body.style.backgroundColor = color;
            resolve(document.body.style.backgroundColor);
        },1000)
    })}    
        
async function changebg() {
    await bg('red');
    await bg('orange');
    await bg('yellow');
    await bg('green');
    await bg('blue');
}
changebg();