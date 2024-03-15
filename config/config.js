const Joi = require("joi");
require("dotenv").config();

const enVarSchema = Joi.object({
  DATABASE_URL: Joi.string().required(),
  PORT: Joi.number().positive(),
}).unknown();

const { value: envVars, error } = enVarSchema.validate(process.env);

if (error) {
  console.log(error);
}

module.exports = {
  port: envVars.PORT,
  dbConnection: envVars.DATABASE_URL,
};
