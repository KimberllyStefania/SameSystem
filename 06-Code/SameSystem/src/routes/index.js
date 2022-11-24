const express = require('express');
const router= express.Router();
router.get('/',(reg,res)=> {
    res.render('Index');
});
router.get('/about',(reg,res)=> {
    res.render('about');
});


module.exports = router;