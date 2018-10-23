import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import { createHashHistory} from 'history';
const history = createHashHistory()

import MovieSearchContainer from './containers/MovieSearchContainer';
import MovieDetailContainer from './containers/MovieDetailContainer';


export default class App extends Component {
  render() {
    return (
      <Router history={history}>  
        <div className='container'>
          <Route exact path='/' component={MovieSearchContainer} />
          {/* <Route path='/movie/1' component={MovieDetailContainer} /> */}
          <Route path='/movie/:imdbID' component={MovieDetailContainer} />
        </div>
      </Router>    
    );
  }
}
