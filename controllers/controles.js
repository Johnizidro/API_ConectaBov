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
    producaoMensal
  } = req.body;

  try {
    const novoAnimal = new Model(req.body);
    await novoAnimal.save();
    return res.status(201).json({ message: 'Animal cadastrado com sucesso' });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Código Sisbov já cadastrado' });
    }
    return res.status(500).json({ message: 'Erro ao cadastrar', error: error.message });
  }
};

