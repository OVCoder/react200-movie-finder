import {combineReducers} from 'redux';
import MovieSearchReducer from './containers/MovieSearchContainer/MovieSearchReducer';

const rootReducer = combineReducers({
  search: MovieSearchReducer
});

export default rootReducer;
