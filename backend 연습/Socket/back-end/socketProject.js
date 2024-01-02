const http =require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const PORT = 8000;


const cors = require("cors");
app.use(cors());
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3002",
  },
});






server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});