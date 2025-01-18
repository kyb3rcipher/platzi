import { User, UserSchema } from './user.model.js';
import { Customer, CustomerSchema } from './customer.model.js';

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    User.init(Customer, Customer.config(sequelize));
}

export { setupModels };