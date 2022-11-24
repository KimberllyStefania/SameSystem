const express = require('express');
const { Schema } = mongose;

const ProductSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: date, default: date.now},
});
module.exports = mongose.model('Product' , 'ProductSchema')