require("dotenv").config();

const enVarSchema = require("../validations/env.validations");

const { value: envVars, error } = enVarSchema.validate(process.env);

if (error) {
  console.log(error);
}

module.exports = {
  port: envVars.PORT,
  dbConnection: envVars.DATABASE_URL,
};
