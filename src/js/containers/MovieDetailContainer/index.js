import {connect} from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStoreToProps(store){
  return {
    searchMovie: store.search.searchMovieTitle,
    movieList: store.search.movieList,
    currentMovieInfo: store.search.currentMovieInfo
  }
}
export default connect(mapStoreToProps)(MovieDetailContainer);