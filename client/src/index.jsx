import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'

class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
      movies: [],
      favorites: [],
      showFaves: false,
    };
    this.getMovies = this.getMovies.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
  }

  componentDidMount() {
    this.getFavorites();
  }

  getMovies(genreId) {
    // make an axios request to your server on the GET SEARCH endpoint
    // console.log('client: genreId to look up is: ', genreId);
    axios.get('/search', {params: {genreId: genreId}})
    .then((data) => this.setState({movies: data.data}))
    .catch((err) => console.log('client: err retrieving specific genre from API', err));
  }

  getFavorites() {
    axios.get('/favorites')
    .then((data) => console.log('data', data));
  }

  saveMovie(movie) {
    // same as above but do something diff
    // console.log('client: this is the movie clicked on to be saved', movie);
    axios.post('/save', {params: {
      id: movie.id, 
      title: movie.title, 
      release_date: movie.release_date,
      vote_average: movie.vote_average, 
      poster_path: movie.poster_path
    }})
    .then((data) => this.setState({favorites: [...this.state.favorites, movie]}))
    .catch((err) => console.log('client: err saving movie', err));
  }

  deleteMovie(movie) {
    // same as above but do something diff
    axios.post('/delete', {params: {
      id: movie.id
    }})
    .then((data) => console.log(data))
    .catch((err) => console.log('client: err deleting movie', err));
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header> 
        
        <div className="main">
          <Search 
            swapFavorites={this.swapFavorites} 
            showFaves={this.state.showFaves}
            getMovies={this.getMovies}
          />
          <Movies 
            movies={this.state.showFaves ? this.state.favorites : this.state.movies} 
            showFaves={this.state.showFaves}
            saveMovie={this.saveMovie}
            deleteMovie={this.deleteMovie}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));