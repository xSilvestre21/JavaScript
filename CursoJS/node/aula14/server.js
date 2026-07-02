require("dotenv").config();

const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit("pronto");
  })
  .catch((err) => console.log(err));

const routes = require("./routes");
const path = require("path");
const { middlewareGlobal } = require("./src/middleware/middleware");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

// Nossos Próprios Middlewares
app.use(middlewareGlobal);
// app.use(outroMiddleware);
app.use(routes);

app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
  });
});
