const express = require('express');
const router= express.Router();
router.get('/users/signin',(reg,res)=> {
    res.rend('users/singnin');
});
router.get('/users/singnup',(reg,res)=> {
    res.render('users/singnup');
});


module.exports = router;