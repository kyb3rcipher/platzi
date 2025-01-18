'use strict';
import { UserSchema, USER_TABLE } from './../models/user.model.js'; 

export async function up(queryInterface, Sequelize) {
    await queryInterface.addColumn(USER_TABLE, 'role', UserSchema.role);
}

export async function down(queryInterface) {
    await queryInterface.removeColumn(USER_TABLE, 'role');
}