const express = require('express');
const router= express.Router();
const Product =require('../models/product')
router.get('/product/add', (req, res) => {
    res.render('../products/newproduct.html');
});
router.post('../products/newproducts.html', async(req, res) =>{
    const { title, description }  = req.body;
    const errors = [];
    if (!title) {
        errors.push({Text: 'Por favor ingrese un título'})
    }
    if (!description) {
        errors.push({Text: 'Por favor inglrese una descripción'})
    }
    if(errors.length > 0) {
        res.render('../products/newproducts.html' ,{
            errors,
            title,
            description
        });
    }
    else {
        const newproduct = new Product ({title, description});
        await newproduct.save();
        res.redirect('/product')
    }
        });

router.get('/product',(reg,res)=> {
    res.send('product from database');
});
module.exports = router;