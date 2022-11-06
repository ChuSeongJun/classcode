var fs = require("fs");
var ejs = require("ejs");
var http = require("http");
var express = require("express");

var counter = 0;
function Product(name, image, price, count) {
  this.index = counter++;
  this.name = name;
  this.image = image;
  this.price = price;
  this.count = count;
}

var products = [
  new Product("JavaScript", "image.jpeg", 28000, 30),
  new Product("jQuery", "image.jpeg", 28000, 30),
  new Product("Node.js", "image.jpeg", 32000, 30),
  new Product("Socket.io", "image.jpeg", 17000, 30),
  new Product("Connect", "image.jpeg", 18000, 30),
  new Product("Express", "image.jpeg", 31000, 30),
  new Product("EJS", "image.jpeg", 12000, 30),
];

var app = express();
var server = http.createServer(app);

app.use(express.static(__dirname + "/public"));

app.get("/", function (request, response) {
  var HTMLPage = fs.readFileSync("HTMLPage.html", "utf8");

  response.send(
    ejs.render(HTMLPage, {
      products: products,
    })
  );
});

server.listen(52273, function () {
  console.log("Server Running at http://127.0.0.1:52273");
});

var io = require("socket.io")(server);
io.on("connection", (socket) => {
  function onReturn(index) {
    products[index].count++;

    clearTimeout(cart[index].timerID);

    delete cart[index];

    io.sockets.emit("count", {
      index: index,
      count: products[index].count,
    });
  }

  let Allcart = [];
  var cart = {};

  socket.on("cart", function (index) {
    products[index].count--;

    cart[index] = {};
    cart[index].index = index;
    cart[index].timerID = setTimeout(function () {
      onReturn(index);
    }, 1000 * 60 * 10);

    Allcart.push(index);

    io.sockets.emit("count", {
      index: index,
      count: products[index].count,
    });
  });

  socket.on("buy", function (index) {
    clearTimeout(cart[index].timerID);

    delete cart[index];

    io.sockets.emit("count", {
      index: index,
      count: products[index].count,
    });
  });

  socket.on("BuyBtn", function () {
    io.sockets.emit("Allcart", {
      cart: Allcart,
    });
  });

  socket.on("return", function (index) {
    onReturn(index);
  });
});
