const express = require("express");
require("./config/db");
const tarefasRoutes = require("./routes/rotas");
const SerVer = require("./models/modelos");
const controle = require('./controllers/controles');
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); 


app.use("/", tarefasRoutes);


app.get("/", (req, res) => {
  res.status(200).send("Bem Vindo à API!");
});


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});