/* 
   File Name: index.js
   Author: Siddharth Pandya
   Student ID: 300915041
   Web App Name: COMP308-W2019-Midterm-300915041 (My Favourite Books)
*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
