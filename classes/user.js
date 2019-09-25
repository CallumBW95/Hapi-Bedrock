const Mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const Joigoose = require('joigoose')(Mongoose);

const UserJoi = Joi.object({
  username: Joi.string().required(),
  firstname: Joi.string(),
  lastname: Joi.string(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  email: Joi.string().email({ minDomainSegments: 2 }),
  type: Joi.number().required()
});

const UserSchema = new Mongoose.Schema(Joigoose.convert(UserJoi));

module.exports = Mongoose.model('User', UserSchema);