
const express = require("express");
require("./config/db");

const app = express();
const PORT = 3000;

app.use(express.json());

const cors = require("cors");

app.use(cors());


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).send("Bem Vindo à API!");
});