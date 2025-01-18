import boom from '@hapi/boom';
// import getConnection from './../libs/postgres.js';
import { models } from '../libs/sequelize.js';

class UserService {
    constructor() {}

    async create(data) {
        const newUser = await models.User.create(data);
        return data;
    }

    async find() {
        // const client = await getConnection();
        // const rta = await client.query('SELECT * FROM tasks');
        const rta = await models.User.findAll();
        return rta;
    }

    async findOne(id) {
        const user = await models.User.findByPk(id);
        if (!user) {
            throw boom.notFound('user not found');
        }
        return user;
    }

    async update(id, changes) {
        // const user = await models.User.findByPk(id);
        const user = await this.findOne(id);
        const rta = await user.update(changes);
        return rta;
    }

    async delete(id) {
        const user = await models.User.findByPk(id);
        return await user.destroy;
    }
}

export { UserService };