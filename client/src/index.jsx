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
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
  }

  getMovies(genreId) {
    // make an axios request to your server on the GET SEARCH endpoint
    // console.log('client: genreId to look up is: ', genreId);
    axios.get('/search', {params: {genreId: genreId}})
    .then((data) => this.setState({movies: data.data}))
    .catch((err) => console.log('client: err retrieving specific genre from API', err));
  }

  saveMovie() {
    // same as above but do something diff
  }

  deleteMovie() {
    // same as above but do something diff
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