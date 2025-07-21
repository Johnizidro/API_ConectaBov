const Model = require("../models/modelos");

exports.create = async (req, res) => {
  const {
    codigoSisbov,
    nome,
    altura,
    peso,
    sexo,
    dataNascimento,
    pelagem,
    especie,
    raca,
    tipoProducao,
    producaoMensal,
    tempoPastagem,
    observacao,
  } = req.body;

  try {
    const novoCadastro = new Model({
      codigoSisbov,
      nome,
      altura,
      peso,
      sexo,
      dataNascimento,
      pelagem,
      especie,
      raca,
      tipoProducao,
      producaoMensal,
      tempoPastagem,
      observacao,
    });
    await novoCadastro.save();
    res.status(201).json(novoCadastro);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao incluir cadastro" });
  }
};
