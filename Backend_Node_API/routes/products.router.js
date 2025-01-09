import express from 'express';
import { ProductService } from './../services/product.service.js';

const router = express.Router();
const service = new ProductService();

router.get('/', async (req, res) => {
    // const limit = req.query.limit || 100;
    const products = await service.find();
    res.json(products);
});
router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = await service.findOne(id);
        res.json(product);
    } catch(err) {
        next(err);
        res.status(404).json({ message: err.message, stack: err.stack });
    }
});

router.post('/', async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const product = await service.update(id, body);
        res.json(product);
    } catch(err) {
        next(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const product = await service.delete(req.params.id);
        res.json(product);
    } catch(error) {
        res.status(404).json({ message: error.message });
        
    }
});

export default router;