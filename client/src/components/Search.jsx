import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: []
    };
  }

  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {}
        {}

        <select>
          {this.state.genres.map((genre) => <option value="theway">The Way</option>)}
        </select>
        <br/><br/>

        <button>Search</button>

      </div>
    );
  }
}

export default Search;