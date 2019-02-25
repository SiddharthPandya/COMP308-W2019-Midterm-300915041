/* 
   File Name: books.js (models)
   Author: Siddharth Pandya
   Student ID: 300915041
   Web App Name: COMP308-W2019-Midterm-300915041 (My Favourite Books)
*/

let mongoose = require('mongoose');

// create a model class
let gamesSchema = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('books', gamesSchema);
