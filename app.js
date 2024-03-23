const express = require('express');
require('dotenv').config;
const app = express();
const bodyParser = require('body-parser');
const database = require('./config/database');
const getData = require('./routes/getData');
const postData = require('./routes/postData');
const deleteData = require('./routes/deleteData');
const updateData = require('./routes/updateData');

app.use(bodyParser.json());
app.use('/',getData);
app.use('/',postData);
app.use('/',deleteData);
app.use('/',updateData);
const PORT = process.env.PORT || 4000; 
app.listen(PORT,()=>{
    console.log(`app is running on PORT ${PORT}`);
})