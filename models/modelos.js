const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
    codigoSisbov: { type: String, required: true, unique: true }, 
    nome: { type: String, required: true },
    altura: { type: Number, required: true }, 
    peso: { type: Number, required: true }, 
    sexo: { type: String, enum: ['M', 'F'], required: true }, 
    dataNascimento: { type: Date, required: true },
    pelagem: { type: String, required: true },
    especie: { type: String, required: true },
    raca: { type: String, required: true },
    tipoProducao: { type: String, required: true }, 
    producaoMensal: { type: String, required: true } 
});

module.exports = mongoose.model('SerVer', ModelSchema);