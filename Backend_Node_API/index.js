import express from 'express';
import cors from 'cors';
import routerApi from './routes/index.js';
import errorMiddlewares from './middlewares/error.hanlder.js';

const app = express();
const port = 3000;
app.use(express.json());
const corsWhiteList = ["http://localhost:8080", "https://myapp.com"];
const options = {
    origin: (origin, callback) => {
        if (corsWhiteList.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed"));
        }
    }
};
app.use(cors());

app.get('/', (request, response) => {
    response.send("Hello my server in express.js");
});

routerApi(app);

app.use(errorMiddlewares.logErrors);
app.use(errorMiddlewares.ormErrorHandler);
app.use(errorMiddlewares.boomErrorHandler);
app.use(errorMiddlewares.errorHandler);

app.get('/categories/:categoryId/products/:id', (req, res) => {
    const { categoryId, id } = req.params;
    res.json({
        categoryId: categoryId,
        productId: id
    });
});

app.get('/users', (req, res) => {
    const { limit, offset } = req.query;
    if (limit && offset) {
        res.json({
            limit,
            offset
        });
    } else {
        res.send("Parameters not found!");
    }
});

app.listen(port, () => {
    console.log("Server running on: ", port);
});