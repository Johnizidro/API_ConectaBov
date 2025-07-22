const Joi = require("joi");

const serVerValidator = Joi.object({
  codigoSisbov: Joi.string().required().messages({
    "string.base": "Código Sisbov deve ser um texto",
    "string.empty": "Código Sisbov é obrigatório",
    "any.required": "Código Sisbov é obrigatório",
  }),

  nome: Joi.string().min(3).required().messages({
    "string.base": "Nome deve ser um texto",
    "string.empty": "Nome é obrigatório",
    "string.min": "Nome deve ter pelo menos 3 caracteres",
    "any.required": "Nome é obrigatório",
  }),

  altura: Joi.number().positive().required().messages({
    "number.base": "Altura deve ser um número",
    "number.positive": "Altura deve ser positiva",
    "any.required": "Altura é obrigatória",
  }),

  peso: Joi.number().positive().required().messages({
    "number.base": "Peso deve ser um número",
    "number.positive": "Peso deve ser positivo",
    "any.required": "Peso é obrigatório",
  }),

  sexo: Joi.string().valid("M", "F").required().messages({
    "string.base": "Sexo deve ser um texto",
    "any.only": "Sexo deve ser 'M' ou 'F'",
    "any.required": "Sexo é obrigatório",
  }),

  dataNascimento: Joi.date().iso().required().messages({
    "date.base": "Data de nascimento deve ser uma data válida",
    "date.format": "Data de nascimento deve estar no formato ISO (AAAA-MM-DD)",
    "any.required": "Data de nascimento é obrigatória",
  }),

  pelagem: Joi.string().required().messages({
    "string.base": "Pelagem deve ser um texto",
    "string.empty": "Pelagem é obrigatória",
    "any.required": "Pelagem é obrigatória",
  }),

  especie: Joi.string().required().messages({
    "string.base": "Espécie deve ser um texto",
    "string.empty": "Espécie é obrigatória",
    "any.required": "Espécie é obrigatória",
  }),

  raca: Joi.string().required().messages({
    "string.base": "Raça deve ser um texto",
    "string.empty": "Raça é obrigatória",
    "any.required": "Raça é obrigatória",
  }),

  tipoProducao: Joi.string().required().messages({
    "string.base": "Tipo de produção deve ser um texto",
    "string.empty": "Tipo de produção é obrigatório",
    "any.required": "Tipo de produção é obrigatório",
  }),

  producaoMensal: Joi.string().required().messages({
    "string.base": "Produção mensal deve ser um texto",
    "string.empty": "Produção mensal é obrigatória",
    "any.required": "Produção mensal é obrigatória",
  }),
});

module.exports = serVerValidator;
