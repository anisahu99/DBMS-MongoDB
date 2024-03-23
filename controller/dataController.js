const mongoose = require('mongoose');
const Details = require('../models/Details');

const insertIntoDatabase = async(data)=>{
    try {
        await Details.insertMany(data);
    } catch (error) {
        console.log('data insert error ', error);
    }
}

const getData = async(props)=>{
    try {
        let pairAddress=props.pairAddress;
        let res = await Details.find({ pairAddress });
        return res;
    } catch (error) {
        console.log('get data error: ', error);
    }
}

const deleteData = async(props)=>{
    try {
        let pairAddress=props.pairAddress;
        let res = await Details.deleteMany({ pairAddress });
        return res;
    } catch (error) {
        console.log('get data error: ', error);
    }
}

const checkIntoDatabase = async(pairAddress)=>{
    try {
        let res = await Details.find({ pairAddress });
        return res.length;
    } catch (error) {
        console.log('check time error ', error);
    }
}

const updateIntoDatabase = async(detail)=>{
    try {
        console.log(detail.pairAddress,detail.volume,detail.priceUsd);
        if(detail.priceUsd===undefined && detail.volume!==undefined){
            return await Details.updateOne({"pairAddress":detail.pairAddress},{"volume":detail.volume});
        }else if(detail.priceUsd!==undefined && detail.volume==undefined){
            return await Details.updateOne({"pairAddress":detail.pairAddress},{"priceUsd":detail.priceUsd});
        }else if(detail.priceUsd!==undefined && detail.volume!=undefined){
            return await Details.updateOne({"pairAddress":detail.pairAddress},{"volume":detail.volume},{"priceUsd":detail.priceUsd});
        }
    } catch (error) {
        console.log('update query error ',error);
    }
}


module.exports = {
    insertIntoDatabase,
    getData,
    deleteData,
    checkIntoDatabase,
    updateIntoDatabase
};