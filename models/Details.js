const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DetailsSchema = new Schema({
    pairAddress:String,
    volume:Object,
    priceUsd:Number
})

const Details = new mongoose.model('Details', DetailsSchema);

module.exports=Details;