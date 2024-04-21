const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }));

app.use(express.json());

const userRoute = require('./routes/user-routes');

app.use('/api/users/', userRoute);


module.exports = app;
