var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var axios = require('axios'); //get axios
var db = require('./database.js'); //get DB connection
var apiHelpers = require('./apiHelpers.js');

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/search', function(req, res) {
    // get the search genre     
    // https://www.themoviedb.org/account/signup
    // use this endpoint to search for movies by genres, you will need an API key
    // https://api.themoviedb.org/3/discover/movie
    // and sort them by horrible votes using the search parameters in the API


});

app.get('/genres', function(req, res) {
    // make an axios request to get the list of official genres
    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list
    // send back


});

app.post('/save', function(req, res) {

});

app.post('/delete', function(req, res) {

});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
