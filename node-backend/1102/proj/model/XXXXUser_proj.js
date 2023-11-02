const mysql = require('mysql')
const cnn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'sesac_test',
})

//controller에서 data를 받아와야하는것. body에서 가져옴 post요청이니까 
exports.post_signup = (data, cb) => {
  const sql = `INSERT INTO user(userid, name, pw) VALUES('${data.userid}','${data.name}','${data.pw}');`
  
  //connection 함수 ...콜백함수 이용하기.
  cnn.query(sql, function (err) {
    if (err) {
      throw err;
    }
    cb();
  })
}

exports.post_signin = (data, cb) => {
  //data = {userid,pw}
  //select
  const sql = `SELECT * FROM user WHERE userid='${data.userid}' and pw='${data.pw}' limit 1;`
  cnn.query(sql, function (err, rows) { // (err,rows)=>{}문 사용가능
    //rows.length > 0  or limit 1 일경우 rows.length == 0
    if(rows.length > 0 ) {
      throw err;

    }

    // if (err) throw err
    cb(rows)
  })
}
exports.get_user = (id, cb) => {
  const sql = `SELECT * FROM user WHERE id='${id}' limit 1;`
  cnn.query(sql, function (err, rows) {
    if (err) {
      throw err
    }
    cb(rows)
  })
}




//Cuser.ejs 와 exports.profile_edit 연결ㄷ시키기
exports.update_profile = (data, cb) => {

  const sql = `UPDATE user SET name='${data.name}',userid='${data.userid}', pw='${data.pw}' WHERE id='${data.id}'`
  cnn.query(sql, (err,result) => {
    if (err){
      throw err;
    } 
    cb();
  })
}



//Cuser.ejs 와 exports.profile_delete
exports.delete_user = (id, cb) => {
  const sql = `delete from user where id=${id}`
  cnn.query( sql, (err,result) => {
    if (err){
      throw err
    } 
    cb()
  })
}
