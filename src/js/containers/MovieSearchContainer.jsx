import React from 'react';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="container">
        <div className="jumbotron bg-secondary d-flex justify-content-center">
          <h1>Movie Search Container</h1>
        </div>
      </div>
    )
  }
}

export default MovieSearchContainer;