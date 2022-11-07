var socketio = require("socket.io");
var express = require("express");
var http = require("http");
var fs = require("fs");

var seats = [
  [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
];

var app = express();
var server = http.createServer(app);

app.get("/", function (request, response, next) {
  fs.readFile("HTMLPage.html", function (error, data) {
    response.send(data.toString());
  });
});
app.get("/seats", function (request, response, next) {
  response.send(seats);
});

server.listen(52273, function () {
  console.log("Server Running at http://127.0.0.1:52273");
});

var io = socketio(server);
io.sockets.on("connection", function (socket) {
  socket.on("reserve", function (data) {
    seats[data.y][data.x] = 2;
    io.sockets.emit("reserve", data);
  });

  //연속 자리 reserveDouble 이벤트
  socket.on("reserveDouble", function (data) {
    seats[data.y][data.x] = 2;
    //연속 자리 예매 이므로 선택한 자리 바로 옆 자리 지정
    seats[data.y][data.x - 1] = 2;
    io.sockets.emit("reserveDouble", data);
  });

  //자리 취소 reserveBak 이벤트 발생
  socket.on("reserveBak", function (data) {
    seats[data.y][data.x] = 1;
    //타켓은 내가 누른것을 1로 변경
    io.sockets.emit("reserveBak", data);
  });
});
