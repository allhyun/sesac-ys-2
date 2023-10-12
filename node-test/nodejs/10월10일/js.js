function run(){
    console.log("3초 뒤 실행");
}

console.log("시작");

//콜백함수 : 함수의 인자로 함수를 넘길 때, 인자로 넘기는 그 함수

setTimeout(run, 3000); //인자만 작성한다 작동하는 함수를 적을필요가 ㅓㅇㅂㅅ음.
console.log("끝");