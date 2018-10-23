const defaultState = {
  searchMovieTitle: '',
  releaseYear: '',
  plot: '',
  image:'',
  movieList: [],
  currentMovieInfo:{}
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
      var currentMovieList = state.movieList;
      var currentMovieInformation='';
      function findMovieInArray(currentMovieList){
        for (var j = 0; j < currentMovieList.length; j++){
          if (currentMovieList[j].imdbID==payload.imdbID)
            {
              currentMovieInformation = currentMovieList[j];
            }
        }
      }
      findMovieInArray(currentMovieList);

      return{
        ...state,
        currentMovieInfo: currentMovieInformation
        //currentMovieInfo: payload.imdbID
      }
    }

    case 'SEARCH_MOVIE_BY_ID_FULFILLED' :{
      return{
        ...state,
        currentMovieInfo: payload
      }
    }
    default: {
      return state;
    }
  }
}