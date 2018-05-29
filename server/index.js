var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var axios = require('axios'); //get axios
var {getAllFavorites, saveFavorite, deleteFavorite} = require('./database.js'); //get DB connection
var {getGenres, getMoviesByGenre} = require('./apiHelpers.js');

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/search', function(req, res) {
  // get the search genre     
  // https://www.themoviedb.org/account/signup
  // use this endpoint to search for movies by genres, you will need an API key
  // https://api.themoviedb.org/3/discover/movie
  // and sort them by horrible votes using the search parameters in the API
  // console.log('server: what is req.query', req.query.genreId); 
  getMoviesByGenre(req.query.genreId)
  .then((data) => res.send(data.data.results))
  .catch((err) => console.log('server: err retrieving specific genres from API', err));
});

app.get('/genres', function(req, res) {
  // make an axios request to get the list of official genres
  // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list
  // send back
  // console.log('server: what is reqbody:', req.query);
  getGenres()
  .then((data) => res.send(data.data.genres))
  .catch((err) => console.log('server: err retrieving genres from API', err));
});

app.get('/favorites', function(req, res) {
  getAllFavorites((err, data) => {
    console.log('server: this is what i get back from DB', data);
    if(err) res.send(500, 'server: err fetching favs from DB', err);
    else res.send(200, data);
  });

});

app.post('/save', function(req, res) {
  // console.log('server: what is save movie req.body.params', req.body.params);
  saveFavorite(req.body.params, (err, data) => {
    if(err) res.send(500, 'server: err saving movie into DB', err);
    else res.send(201, 'server: successfully saved movie into DB');
  });
});

app.post('/delete', function(req, res) {
  console.log('wegiohwego', req.body.params);
  deleteFavorite(req.body.params, (err, data) => {
    if(err) res.send(500, 'server: err deleting movie from DB', err);
    else {getAllFavorites((err, data) => {
    console.log('server: this is what i get back from DB', data);
    if(err) res.send(500, 'server: err fetching favs from DB', err);
    else res.send(200, data);
  })
  };
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
