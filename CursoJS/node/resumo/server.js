const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit("pronto");
  })
  .catch((err) => console.log(err));
const session = require("express-session"); // Salvar um cookie com id no computador do cliente
const MongoStore = require("connect-mongo").default; // Sessões serem salvas na base de dadospara não ficar sem memória
const flash = require("connect-flash"); // Mensagens autodestrutivas, perfeito para mandar feedbacks para o usuário
const routes = require("./routes");
const path = require("path");
const helmet = require("helmet");
const csrf = require("csurf"); // Permite que nenhum site externo poste algo na aplicação
const {
  middlewareGlobal,
  checkCsrfError, // Funções executadas na rota
  csrfMiddleware,
} = require("./src/middleware/middleware");

app.use(helmet());
app.use(express.urlencoded({ extended: true })); // Pode postar formulários para dentro da aplicação
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public"))); // acessa diretamente arquivos estáticos (imagens, css...)

const sessionOptions = session({
  secret: "gkjdfouhoihqerhfughfeçoih",
  store: MongoStore.create({
    mongoUrl: process.env.CONNECTIONSTRING,
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});
app.use(sessionOptions);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views")); // Arquivos renderizados na tela
app.set("view engine", "ejs"); // Engine utilizada para renderizar html

app.use(csrf());
// Nossos Próprios Middlewares
app.use(middlewareGlobal); // quando não tem a rota antes esse middleware pode ser acessado em qualquer local
// app.use(outroMiddleware);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
  });
});
