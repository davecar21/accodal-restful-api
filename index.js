const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('./server/models/db');

const productRouter = require('./server/routes/productRoute');

app.use('/items', productRouter);

app.listen(process.env.PORT || 3100, ()=> console.log('connected: listen 3100'));