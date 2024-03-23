const express = require('express');
const router = express.Router();
const { updateIntoDatabase } = require('../controller/dataController');

router.put('/updateData',async(req,res)=>{
    console.log(req.body);
    let result = await updateIntoDatabase(req.body);
    console.log(result);
    res.send('Updated');
})

module.exports = router;