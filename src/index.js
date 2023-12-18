import express from "express";
import { engine } from "express-handlebars";
import { __dirname } from "./utils.js";
import * as path from "path";
import { Server } from "socket.io";

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Serving on port ${PORT}`);
});

const io = new Server(server);

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.set("views", path.resolve(__dirname + "/views"));
app.use("/", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");

  io.on("connection", (socket) => {
    console.log("socket connection");
  });
});
