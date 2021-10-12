'use strict'
require('dotenv').config();
const express = require('express')
const server = express();
const cors = require('cors')
const axios = require('axios')
const PORT = 3002

server.use(cors());
server.use(express.json());
// mongoose.connect('mongodb://localhost:27017/DB_NAME',{ useNewUrlParser: true, useUnifiedTopology: true });
const getAllData = require('./modules/APIData.js');

server.get('/', homeHandler);
server.get('/AllData', getAllData);

server.get('*', notFoundHandler);

function homeHandler(req,res){
    res.status(200).send('Home Route Working');
}
function notFoundHandler(req,res){
    res.status(404).send('Not Found');
}

server.listen(PORT,()=>{
    console.log(`Working on port ${PORT}`)
})