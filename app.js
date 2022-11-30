import express from 'express';
import cors from 'cors'
import HelloController from "./ controllers/hello-controller.js";
import UserController
    from "./ controllers/users/users-controller.js"
import TuitsController
    from "./ controllers/tuits/tuits-controller.js";

import mongoose from "mongoose";
const CONNECTION_STRING = 'process.env.DB_CONNECTION_STRING'
    || 'mongodb://127.0.0.1:27017/tuiter';
mongoose.connect('mongodb+srv://runhan:970329@cluster1.3q7rbw3.mongodb.net/tuiter?retryWrites=true&w=majority');


const app = express();
app.use(cors())
app.use(express.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// const express = require('express')
// const app = express()
// app.get('/hello', (req, res) => {res.send('Life is good!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000);