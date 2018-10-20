import {connect} from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store){
  return {
    searchMovie: store.search.searchMovieTitle,
    movieList: store.search.movieList
  }
}
export default connect(mapStoreToProps)(MovieSearchContainer);