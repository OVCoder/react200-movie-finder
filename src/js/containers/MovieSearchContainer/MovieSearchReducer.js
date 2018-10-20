const defaultState = {
  searchMovieTitle: '',
  releaseYear: '',
  plot: '',
  image:'',
  movieList: []
};

export default function SearchMovieReducer (state=defaultState, action){
  const {type, payload} = action;

  switch (type){
    case 'UPDATE_SEARCH_MOVIE' : {
      //will return an object
      return{
        ...state,
        searchMovieTitle: payload.searchMovieTitle
      };
    }
    case 'SEARCH_MOVIE_FULFILLED' :{
      console.log (payload, "THIS IS PAYLOAD FROM SEARCH_MOVIE_FULFILLED");
      return{
        ...state,
        movieList: payload
      }
    }
    case 'MOVIE_INFO' :{
      return{
        ...state
      }
    }
    default: {
      return state;
    }
  }
}