import Joi from 'joi';

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string().min(5)

const createUserSchema = Joi.object({
    email: email.required(),
    password: password.required(),
    role: role.required()
});

const updateUserSchema = Joi.object({
    email: email,
    role: role.required(),
});

const getUserSchema = Joi.object({
    id: id.required(),
});

export default { createUserSchema, updateUserSchema, getUserSchema };
export { createUserSchema, updateUserSchema, getUserSchema };