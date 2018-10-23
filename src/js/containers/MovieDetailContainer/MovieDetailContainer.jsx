import React from 'react';
import { Link } from 'react-router-dom';

// Import of action creators
import{
  searchMovieByImdbID
} from '../MovieSearchContainer/MovieSearchActions';

class MovieDetailContainer extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { match: { params } } = this.props;
    console.log(params.imdbID, "THIS IS params.imdbID from MovieDetailContainer");
    const {dispatch} = this.props;
    dispatch(searchMovieByImdbID(params.imdbID));
  }

  render(){
    const {currentMovieInfo} = this.props;
    console.log(currentMovieInfo,"THIS IS FROM MovieDetailContainer currentMovieInfo");
    return(
      <div className="container">
        <div className="jumbotron bg-secondary d-flex justify-content-center">
          <h1>Movie Finder</h1>
        </div>

        <div>
          <Link to={'/'}>
            <button 
              className="btn-secondary bottom-margin make-round-corners">
              {/* onClick={BrowserHistory.goBack} */}
              Go Back
            </button>
          </Link>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5 d-inline-block">
              <img 
                src={currentMovieInfo.Poster}
                className="rounded image-size centerIt"
                alt="movie poster">
              </img>
            </div>
            <div className="col-md-1 d-inline-block"></div>
            <div className="col-md-6 d-inline-block make-round-corners border border-secondary">
              
              <div className="form-group bg-light text-dark grey-area">
                <label>Movie Details
                </label>
              </div>

              <div className="form-group grey-box padding bottom-margin">
                <h3>{currentMovieInfo.Title}</h3>
                <span className="span-style make-round-corners">Release Date: {currentMovieInfo.Released}</span>
                <span className="span-style make-round-corners">{currentMovieInfo.Length}</span>
                <span className="span-style make-round-corners">{currentMovieInfo.Genre}</span>
              </div>
              <div className="bottom-margin">{currentMovieInfo.Plot}
              </div>
              <div className="bottom-margin">
                  
                  Movie Awards: {currentMovieInfo.Awards}
                <div>
                  <b>Metascore: {currentMovieInfo.Metascore}/100 </b>
                </div>
                <div>
                  <b>IMDB: {currentMovieInfo.imdbRating}</b>
                </div>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetailContainer;