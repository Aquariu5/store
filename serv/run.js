// require('dotenv').config();
import 'dotenv/config';
import express from 'express';
import sequelize from './db.js';
import * as models from './models/models.js'
import cors from 'cors'
import router from './routes/index.js';
import ErrorHandlingMiddleware from './middleware/ErrorHandlingMiddleware.js';
import fileUpload from 'express-fileupload';
import path from 'path';
// const express = require('express');
const __dirname = path.resolve(path.dirname(''));
const PORT = process.env.PORT1 || 7000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({extended: true}));
app.use(express.static(path.resolve(__dirname, 'static')));
app.use('/api', router);

//последний
app.use(ErrorHandlingMiddleware);

app.get('/', (req, res) => {

    return res.json({message: 'yas'})
});

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, console.log(`On ${PORT}`));
    } catch(e) {
        console.log(e);
    }
}

start();
