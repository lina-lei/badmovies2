const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllFavorites = function(callback) {
  // get favorites from the database
  let queryStr = `SELECT * FROM favorites;`;
  connection.query(queryStr, (err, data) => {
    // console.log('DB: what am i getting back', data);
    if(err) console.log('DB: err querying database', err);
    else callback(data);
  });
};

const saveFavorite = function(movie, callback) {
  // save movie to favorites in the database
  console.log('what is movie', movie);
  let queryStr = `INSERT INTO favorites VALUES (${movie.id}, "${movie.title}", "${movie.release_date}", ${movie.vote_average}, "${movie.poster_path}")`;
  connection.query(queryStr, (err, data) => {
    if(err) console.log('DB: err saving movie into database', err);
    else callback(data);
  });
};

const deleteFavorite = function(movie, callback) {
  // delete a movie from favorites in the database
  let queryStr = `DELETE FROM favorites WHERE id = ${movie.id}`;
  connection.query(queryStr, (err, data) => {
    if(err) console.log('DB: err deleting movie from database', err);
    else callback(data);
  });
};

module.exports = {
  getAllFavorites,
  saveFavorite,
  deleteFavorite
};