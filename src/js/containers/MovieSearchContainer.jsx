import React from 'react';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
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
            placeholder="Search"/>
          <button 
            className="btn my-sm-0" 
            type="submit"
            onClick=""
            >Go!
          </button>
        </div>
      
        {/*List of movies begins*/}

        <div className="container">
          <div className="row border border-secondary mb-1">
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
          </div> 
          <div className="row border border-secondary mb-1">
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
          </div> 
        </div>
        {/*List of movies ends*/}

      </div>
    )
  }
}

export default MovieSearchContainer;