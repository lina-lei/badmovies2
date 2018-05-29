
const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../server/config.js');

// write out logic/functions required to query TheMovieDB.org

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover

// Don't forget to export your functions and require them within your server file

let getGenres = () => {
  return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
}

let getMoviesByGenre = (genreId) => {
  // console.log('apihelpers: what is passed in:', genre);
  return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&with_genres=${genreId}`);
}

module.exports = {getGenres, getMoviesByGenre};