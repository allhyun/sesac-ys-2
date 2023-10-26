const {commentInfos} = require("../model/comments")

exports.main = (req, res) => {
  res.render("index");
};

exports.comments = (req, res) => {
  const commentData = commentInfos();
  //   commentData = [{
  //     id: 1,
  //     userid: "lily",
  //     date: "2023-10-26",
  //     comment: "hello",
  //   },
  //   {
  //     id: 2,
  //     userid: "gildong",
  //     date: "2023-10-28",
  //     comment: "hello world",
  //   },]


  //views 폴더에 comments.ejs를 랜더하겠다.
  res.render("comments", {
    commentInfos: commentData,
  });
};