const express = require('express');
const router = express.Router();
const { insertIntoDatabase , checkIntoDatabase} = require('../controller/dataController');
router.post('/insertData',(req,res)=>{
    let result = req.body.pairs;
    let data = [];
    for(let i=0;i<result.length;i++){
        if(checkIntoDatabase(result[i].pairAddress)===0){
            let temp = {
                pairAddress:result[i].pairAddress,
                priceUsd:result[i].priceUsd,
                volume:result[i].volume
            }
            data.push(temp);
        }
    }
    insertIntoDatabase(data);
    res.send('Insert Data successfully');
})
module.exports=router;