const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllFavorites = function(callback) {
  // get favorites from the database
};

const saveFavorite = function(callback) {
  // save movie to favorites in the database
};

const deleteFavorite = function(callback) {
  // delete a movie from favorites in the database
};

module.exports = {
  getAllFavorites,
  saveFavorite,
  deleteFavorite
};