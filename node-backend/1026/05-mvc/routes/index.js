const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");
//Cmain 의 파일을 불러오겠다.


//요청에 대한 정보를 모아둠.

// localhost:8000/
router.get("/", controller.main); //controller변수에 담긴 파일안에 있는 main 변수

// localhost:8000/comments
router.get("/comments", controller.comments);//controller변수에 담긴 파일안에 있는 comments 변수

module.exports = router;