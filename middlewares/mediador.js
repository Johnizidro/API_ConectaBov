
module.exports = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
  
    if (error) {
      const mensagens = error.details.map((err) => err.message);
      return res.status(400).json({ erros: mensagens });
    }
  
    next();
  };
  