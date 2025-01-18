import { faker } from '@faker-js/faker';
import boom from '@hapi/boom';
// import pool from '../libs/postgres.pool.js';
import sequelize from '../libs/sequelize.js';

class ProductService {
    constructor() {
        this.products = [];
        this.generate(100);
        // this.pool = pool;
        // this.pool.on('error', (err) => { console.log(err); });
    }

    generate(limit) {
        for (let i = 0; i < limit; i++) {
            this.products.push(
                {
                    id: i + 1,
                    name: faker.commerce.productName(),
                    price: parseInt(faker.commerce.price()),
                    image: faker.image.urlPicsumPhotos()
                }
            );
        }
    }

    async create(data) {
        const newProduct = {
            id: this.products.length + 1,
            ...data
        };
        this.products.push(newProduct);
        return newProduct;
    }

    async find() {
        const query = 'SELECT * FROM tasks';
        const [ data, metadata ] = await sequelize.query(query);
        return data;
    }

    async findOne(id) {
        return this.products.find(item => item.id == id);
    }

    async update(id, changes) {
        const index = this.products.findIndex(item => item.id == id);
        if (index === -1) {
            // throw new Error("Product not found");
            throw boom.notFound('Product not found');
        }
        let product = this.products[index];
        this.products[index] = {
            ...product,
            ...changes
        };
        return this.products[index];
    }

    async delete(id) {
        const index = this.products.findIndex(item => item.id == id);
        if (index === -1) {
            throw new Error("Product not found");
        }
        this.products.splice(index, 1);
        return { id };
    }
}

export { ProductService };