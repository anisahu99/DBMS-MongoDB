const express = require('express');
const router=express.Router();
const { getData, deleteData } = require('../controller/dataController');
router.delete('/deleteData',async(req,res)=>{
    let result = await deleteData(req.query);
    res.send(result);
})

module.exports=router;