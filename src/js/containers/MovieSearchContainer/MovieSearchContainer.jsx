import React from 'react';

// Import of action creators
import{
  updateMovieSearch,
  searchMovieByTitle,
  provideMovieInfo
} from './MovieSearchActions';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleMovieSearchInput = this.handleMovieSearchInput.bind(this);
    this.handleAnyMovieSearch = this.handleAnyMovieSearch.bind(this);
    this.handleMovieInfo = this.handleMovieInfo.bind(this);
  }

  handleMovieSearchInput(event){
    const {dispatch} = this.props;
    const {value} = event.target;
    console.log(this.props,"this is THIS.PROPS");
    dispatch(updateMovieSearch(value));
  }
  handleAnyMovieSearch(){
    const {dispatch, searchMovie} = this.props;
    dispatch(searchMovieByTitle(searchMovie));
  }
  handleMovieInfo(event){
    const {dispatch} = this.props;
    const {key} = event.target;
    console.log(this, "THIS IS this");
    // dispatch(provideMovieInfo(key)); //key here is imdbID
  }

  render(){
    //Values below were provided by connect()
    const {searchMovieTitle, movieList} = this.props;
    console.log(this.props,"THIS.PROPS from render method")
    return(
      <div className="container">
        <div className="jumbotron bg-secondary d-flex justify-content-center">
          <h1>Movie Finder</h1>
        </div>

        {/*Search bar with the button*/}
        <div className="input-group mb-4 bg-light mw-90">
          <input 
            className="form-control"
            type="text" 
            placeholder="Search"
            value={searchMovieTitle}
            onChange={this.handleMovieSearchInput}/>
          <button 
            className="btn my-sm-0" 
            type="submit"
            onClick={this.handleAnyMovieSearch}
            >Go!
          </button>
        </div>
      
        {/*List of movies begins*/}

        <div className="container">
          {movieList.map((movieObject, index) => (
          <div className="row border border-secondary mb-1" key={index}>
            <div className="col-md-3 d-inline-block">
              <img 
                src={movieObject.Poster} 
                className="rounded float-left image-size"
                height="200px"
                alt="movie poster"/>
            </div>
            <div className="col-md-9 d-inline-block align-self-center">
              <div className="row">{movieObject.Title}</div>
              <p>{movieObject.Year}</p>
              <hr/>
              <div className="row">{movieObject.plot}</div>
              <button 
                type="button" 
                className="btn btn-success float-right bg-secondary border border-secondary"
                key={movieObject.imdbID}
                onClick={this.handleMovieInfo}
                >
                More Information
              </button>
            </div>
          </div>
          ))}
          
          {/* <div className="row border border-secondary mb-1">
            <div className="col-md-3 d-inline-block">
              <img src="../../images/theCrown.jpg" className="rounded float-left" height="200px" alt="the Crown movie"/>
            </div>
            <div className="col-md-9 d-inline-block align-self-center">
              <div className="row">Movie Title</div>
              <p>release year </p>
              <hr/>
              <div className="row">plot</div>
              <button type="button" className="btn btn-success float-right bg-secondary border border-secondary">More Information</button>
            </div>
          </div>  */}
        </div>
        {/*List of movies ends*/}

      </div>
    )
  }
}

export default MovieSearchContainer;