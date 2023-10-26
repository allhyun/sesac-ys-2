const express= require("express");
const router = express.Router();
const controller = require("../controller/pracCmain해설");

//app을 router로 다 바꿔라...

// localhost:8000/user
router.get("/",controller.main);


// localhost:8000/user/login(post)
router.post("/login", controller.login);

module.exports = router;

  //모듈로 내보내기.