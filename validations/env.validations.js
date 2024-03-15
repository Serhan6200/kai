const Joi = require("joi");

const enVarSchema = Joi.object({
  DATABASE_URL: Joi.string().required(),
  PORT: Joi.number().positive().default(4000),
}).unknown();

module.exports = enVarSchema;
