const express = require("express");
const multer = require("multer"); 
const path = require("path");

const app = express();
const PORT = 8000;


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

            // const baseName = path.basename(file.originalname, ext)

            const userId = path.basename(req.body.id, ext)
            const fileName = userId+"_"+Date.now() +ext 
            done(null,fileName)
        },
    }),
    limits : {fileSize: 5 * 1024 *1024},// 5MB 제한 <파일크기의 제한>
});


app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("project")
});


app.post("/upload", uploadtDetail.single("userfile"), function(req, res){
    console.log("file",req.file);
    console.log("body",req.body);
    res.render("result",{
        src: req.file.path,
        id: req.body.id,
        pw: req.body.pw,
        name: req.body.name,
        age:req.body.age
    });
})


// app.post("/upload/detail", uploadtDetail.single("userfile"), function(req, res){
//     console.log("file detial",req.file);
//     console.log("body detial",req.body);
//     res.send("파일 업로드");
// })

// //array메소드 사용하여 파일 여러개 업로드 (name(input) 하나로 여러개의 파일을 받는 방법)
// //req.files 생성
// app.post("/upload/array",uploadtDetail.array("userfile"), function(req,res){
//     console.log("file 여러개(ver1)",req.files);
//     res.send("파일 여러개 ver1 업로드");
// })

// //fileds():파일 여러개 업로드. name이 두개이상.(input이 2개 이상)
// app.post("/upload/fileds",uploadtDetail.fields([{name:"userfile1"},{name:"userfile2"}]), function(req,res){
//     console.log("파일 여러개 ver2 업로드",req.files);
//     console.log("req.body",req.body);
//     res.send("파일 여러개 ver2 업로드");
// })

app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });