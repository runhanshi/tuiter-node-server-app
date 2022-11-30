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
const corsOptions ={
    origin:'*',
    credentials:true,
    methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    headers: 'X-Requested-With,Authorization,content-type',//access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json());

app.use(function (req, res, next) {


    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Authorization,content-type');

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