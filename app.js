// Carregando módulos
const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
const admin = require("./routes/admin");
const path = require("path");
//const mongoose = require("mongoose")

// Configurações
// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars (utilizando express-handlebars)
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

// Mongoose

// Public
app.use(express.static(path.join(__dirname, "public")));

// Rotas
app.get("/", (req, res) => {
  res.send("Rota principal");
});

app.get("/posts", (req, res) => {
  res.send("Lista Posts");
});

app.use("/admin", admin);

// Outros
const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}!`);
});
