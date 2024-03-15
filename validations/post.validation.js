const Joi = require("joi");

const createPostSchema = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
  }),
};

module.exports = { createPostSchema };
