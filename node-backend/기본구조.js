const express = require("express");
const app = express();
const PORT = 8000;


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });