const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = 8000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/zoom", (req, res) => {
  res.render("zoom");
});

io.on("connection", (socket) => {
  console.log("ユーザが接続しました。");
  socket.on("message", (msg) => {
    io.emit("message", msg);
  });
});

server.listen(port, () => {
  console.log("server running!");
});
