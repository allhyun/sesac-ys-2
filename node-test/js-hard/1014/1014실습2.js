function call(name ){
    return new Promise ((resolve,reject) => {
        setTimeout(function(){
            let name  = name;
            resolve(name);
        },1000);
    })
}