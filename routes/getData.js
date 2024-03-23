const express = require('express');
const router=express.Router();
const { getData } = require('../controller/dataController');
router.get('/getData',async(req,res)=>{
    let data = await getData(req.query);
    res.json(data);
})

module.exports=router;