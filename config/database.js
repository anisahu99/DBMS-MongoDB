require('dotenv').config();
const mongoose = require('mongoose');
const URL = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@db-system.dhkp2d4.mongodb.net/?retryWrites=true&w=majority&appName=db-system`;

mongoose.connect(URL)
.then(()=>{
    console.log('Database Connected')
})
