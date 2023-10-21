const express = require("express");
const multer = require("multer"); //멀터를 불러오는 코드
const path = require("path");
//path: 파일 경로를 받았을 때, 그 조작을 도와준다.
//ex)확장자를  뽑는다. 파일이름을 추출
console.log("hi.txt의  확장자:",path.extname("hi.txt"))
console.log("hi.txt의  이름:",path.basename("hi.txt",path.extname("hi.txt")))


const app = express();
const PORT = 8000;

//upload라는 객체 안에는 미들웨어 함수가 존재. single(), array()
//미들웨어 : 요청과 응답 사이에 존재하는 함수
//클라이언트 요청을 받고 응답하기 전에 설정하고싶으면 미들웨어로 등록이 가능하다.
//multer가 임의의 문자열을 생성해서 그 문자열을 파일이름으로 만든다.
//심지어 확장자도 안바꿔준다.
const upload = multer({
    //인자로 객체가 넘어간다
    dest: 'uploads/',
    //dest : 어디에 저장할것이냐.
    
})

const uploadtDetail = multer({
    //disk에 저장소를 만든다!
    storage: multer.diskStorage({
        destination : function(req, file, done){
            //done이라는 콜백함수를 이용해서 경로를 지정한다.
            done(null,"uploads/")
        },
        //파일명을 지정하는 함수
        filename : function(req, file, done){
            console.log(file) //file.originalname : 다운로드.jpg
            const ext= path.extname(file.originalname); //.jpg

            const baseName = path.basename(file.originalname, ext)//다운로드
            //다운로드_12341234.jpg로 만들자 중복될일 없는 숫자를 만들어서 넣어서 생성할 이름.
            const fileName = baseName+"_"+Date.now() +ext //다운로드_12341234.jpg 명으로 만들수잇다.


            done(null,fileName)
        },
    }),
    limits : {fileSize: 5 * 1024 *1024},// 5MB 제한 <파일크기의 제한>
});

//storage : 파일을 저장할 정보
  //ㄴ> diskStorage:파일을 디스크에 저장하기 위한 기능을 제공하는 메소드
  //      ㄴ> destination : 파일이 저장될 경루
  //      ㄴ> filename : 파일이 저장될 이름
//llimits
  //ㄴ> filesize : 파일의 최대 크기 설정


app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("index")
});

//single() : 미들웨어=> 클라이언트가 보낸 요청 중에 userfile이라는 name의 파일 데이터가 있다면
//파일을 multer의 설정대로 저장해서, req.file<single()사용시> or req.files<array()사용시> 이라는 객체를 생성해서 다음 함수에 넘겨준다.
//single():파일 하나만 업로드할 때 사용함 ->req.file 생성
app.post("/upload", upload.single("userfile"), function(req, res){
    console.log("file",req.file);
    console.log("body",req.body);
    res.send("파일 업로드");
})

//"/upload" 부분에 미들웨어 single()을 넣고싶다.
app.post("/upload/detail", uploadtDetail.single("userfile"), function(req, res){
    console.log("file detial",req.file);
    console.log("body detial",req.body);
    res.send("파일 업로드");
})

//array메소드 사용하여 파일 여러개 업로드 (name(input) 하나로 여러개의 파일을 받는 방법)
//req.files 생성
app.post("/upload/array",uploadtDetail.array("userfile"), function(req,res){
    console.log("file 여러개(ver1)",req.files);
    res.send("파일 여러개 ver1 업로드");
})

//fileds():파일 여러개 업로드. name이 두개이상.(input이 2개 이상)
app.post("/upload/fileds",uploadtDetail.fields([{name:"userfile1"},{name:"userfile2"}]), function(req,res){
    console.log("파일 여러개 ver2 업로드",req.files);
    console.log("req.body",req.body);
    res.send("파일 여러개 ver2 업로드");
})

app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });