const express = require('express')
const user = require('../controller/CUser_proj')
const router = express.Router()


//index페이지 렌더 페이지를 렌더한다 -> get요청.
router.get('/', user.index) //index를 렌더

//controller에 작성시켜줄 !
// router.get('/',(req,res)=>{
//     res.render("index");
// })

//회원가입 페이지 렌더
router.get('/signup', user.signup)


//controller에 작성시켜줄 !
// router.get('/signup',(req,res)=>{
//     res.render("signup");
// })



//회원가입 -> user테이블에 insert를 실행시켜주는 api가 존재해야한다.<회원가입 버튼을 눌렀을때 일어나야하는 상황>
//views 의 signup.ejs
router.post('/signup', user.post_signup)

//controller에 작성시켜줄 !
// router.post('/signup',(req,res)=>{ //회원가입 버튼 클릭시
//     res.send();
// })


//로그인 페이지 렌더

router.get('/signin', user.signin)

//controller에 작성시켜줄 !
// router.get('/signin',(req,res)=>{
//     res.render("signin");
// })


//로그인 ->user table에서 회원존재여부를 판단하는 api <로그인 버튼을 눌렀을 때>
//views 의 signin.ejs
router.post('/signin', user.post_signin) //로그인 버튼 클릭시

//회원정보 페이지 렌더
//프로필 페이지를 렌더(임시. 일반 post 전송. 왜냐? 로그인을 유지시킬 수 있는 기술을 모르기때문에..)
router.post('/profile', user.profile) 
router.patch('/profile/edit/:id', user.profile_edit) //회원정보 수정 버튼 클릭시
router.delete('/profile/delete/:id', user.profile_delete) //회원탈퇴 버튼을 클릭시

module.exports = router
