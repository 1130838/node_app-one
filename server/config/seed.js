/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Product = require('../api/product/product.model.js');


Product.find({}).remove(function () {
    Product.create({
            "name": "White Angel",
            "price": 192,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid aperiam, cum ea hic incidunt itaque libero maiores natus numquam omnis provident qui quidem quos, rem rerum sapiente similique veniam.",
            "inStock": true,
            "urlImage": "http://othereden.co.uk/eng_pl_Obsessive-Subtelia-lingerie-set-14175_1.jpg"
        },
        {
            "name": "Naughty Blond",
            "price": 112,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid aperiam, cum ea hic incidunt itaque libero maiores natus numquam omnis provident qui quidem quos, rem rerum sapiente similique veniam.",
            "inStock": true,
            "urlImage": "http://othereden.co.uk/eng_pl_Obsessive-Flores-Set-chemise-thongs-12506_2.jpg"
        },
        {
            "name": "Black Devil",
            "price": 212,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid aperiam, cum ea hic incidunt itaque libero maiores natus numquam omnis provident qui quidem quos, rem rerum sapiente similique veniam.",
            "inStock": false,
            "urlImage": "http://othereden.co.uk/eng_pl_Obsessive-Bloom-Chemise-thong-12496_1.jpg"
        }
    );
});