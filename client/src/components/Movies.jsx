import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.saveOrDelete = this.saveOrDelete.bind(this);
  }

  // Make an onClick for each list item. If the movies shown is the search results, 
  // onClick add it to the database (do it in the main app, and pass down the function)
  // If you're currently showing the fave list, delete the movie instead
  // You can tell which list is currently being rendered based on whether the prop "showFaves" is false (search results) or true (fave list) (within index.jsx)

  saveOrDelete(movie) {
    if(this.props.showFaves) { //if showFaves is true, delete the movie that was clicked
      this.props.deleteMovie(movie);
    } else { //if showFaves is false, save the movie that was clicked
      this.props.saveMovie(movie);
    }
  }

  render() {
    return (
      <ul className="movies">
        {this.props.movies.map((movie) => (
          <li className="movie_item">
            <img src="https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300" />
            <div className="movie_description">
              <h2>De Wae</h2>
              <section className="movie_details">
                <div className="movie_year">
                  <span className="title">Year</span>
                  <span>2018</span>
                </div>
                <div className="movie_rating">
                  <span className="title">Rating</span>
                  <span>10.0</span>
                </div>
              </section>
            </div>
          </li>
        ))}

      </ul>
    );
  }
}

export default Movies;