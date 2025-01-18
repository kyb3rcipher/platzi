import express from 'express';
import productsRouter from './products.router.js';
import usersRouter from './user.router.js';
import customersRouter from './customer.router.js';

export default function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);

    router.use('/products', productsRouter);
    router.use('/users', usersRouter);
    router.use('/customer', customersRouter);
}