const express = require("express");
const multer = require("multer"); 
const path = require("path");
console.log("hi.txt의  확장자:",path.extname("hi.txt"))
console.log("hi.txt의  이름:",path.basename("hi.txt",path.extname("hi.txt")))


const app = express();
const PORT = 8000;


//미들웨어를 만들어서 클라이언트가 접근할 수 있게 해줘야한다!!
//접근권한을 줘야한다!
app.use("/uploads",express.static(__dirname + "/uploads"));

const upload = multer({
    dest: 'uploads/',
})

const uploadtDetail = multer({
    storage: multer.diskStorage({
        destination : function(req, file, done){
            done(null,"uploads/")
        },
        filename : function(req, file, done){
            console.log(file) 
            const ext= path.extname(file.originalname); 

            const baseName = path.basename(file.originalname, ext)
            const fileName = baseName+"_"+Date.now() +ext 
            done(null,fileName)
        },
    }),
    limits : {fileSize: 5 * 1024 *1024},// 5MB 제한 <파일크기의 제한>
});

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("index")
});

app.post("/upload", upload.single("userfile"), function(req, res){
    console.log("file",req.file);
    console.log("body",req.body);
    res.send("파일 업로드");
})
app.post("/upload/detail", uploadtDetail.single("userfile"), function(req, res){
    console.log("file detial",req.file);
    console.log("body detial",req.body);
    res.render("result",{
        src: req.file.path,
        title:req.body.title
    
    }
    );
})
app.post("/upload/array",uploadtDetail.array("userfile"), function(req,res){
    console.log("file 여러개(ver1)",req.files);
    res.send("파일 여러개 ver1 업로드");
})
app.post("/upload/fileds",uploadtDetail.fields([{name:"userfile1"},{name:"userfile2"}]), function(req,res){
    console.log("파일 여러개 ver2 업로드",req.files);
    console.log("req.body",req.body);
    res.render("result");
})

app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });