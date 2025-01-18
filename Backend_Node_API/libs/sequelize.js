import { Sequelize } from 'sequelize';
import { config } from '../config/config.js';
import { setupModels } from '../db/models/index.js';

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI_POSTGRES = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const URI_MYSQL = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI_POSTGRES, {
    //dialect: 'postgres',
    dialect: 'postgres',
    logging: true,
});

setupModels(sequelize);

// sequelize.sync();

export default sequelize;
export const models = sequelize.models;