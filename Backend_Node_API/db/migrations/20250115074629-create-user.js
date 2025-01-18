'use strict';
import { UserSchema, USER_TABLE } from './../models/user.model.js'; 

export async function up(queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
}

export async function down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
}