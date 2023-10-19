const data = {name:"dahyun", gender:"여자"};
const jsonData = JSON.stringify(data);
console.log("json",jsonData);

console.log("json object", JSON.parse(jsonData));

//결과값
//json {"name":"dahyun","gender":"여자"}
//json object { name: 'dahyun', gender: '여자' }