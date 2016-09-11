'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    inStock: Boolean,
    urlImage: String

});

module.exports = mongoose.model('Product', ProductSchema);