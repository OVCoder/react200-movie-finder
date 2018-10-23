import axios from 'axios';

export function updateMovieSearch (movie){
  console.log (movie, "this is MOVIE from updateMovieSearch action");
  return{
    type: 'UPDATE_SEARCH_MOVIE',
    payload: {searchMovieTitle: movie}
  };
}
//http://www.omdbapi.com/?apikey=8730e0e&i=tt3896198 -search by imdbID
//http://www.omdbapi.com/?apikey=8730e0e&t=star - search by title
//http://www.omdbapi.com/?apikey=8730e0e&s=twilight - returns an array of movies

export function searchMovieByTitle(searchMovieTitle){
  var movieForURI=encodeURIComponent(searchMovieTitle);
  console.log(movieForURI, "THIS IS movieForURI");
  var APIkey = '8730e0e';
  console.log('http://www.omdbapi.com/?apikey='+APIkey+'&s='+movieForURI, 'THIS IS URI string');
  // axios.get('http://www.omdbapi.com/?apikey='+APIkey+'&s='+movieForURI)
  //   .then((response) => {
  //     (response.data.Search).map(x =>
  //       axios.get('http://www.omdbapi.com/?apikey='+APIkey+'&i='+x.imdbID)
  //       .then(response2 => {console.log(response2.data)}))
  //   })
  
  return{
  type: 'SEARCH_MOVIE',
  payload:
    axios.get('http://www.omdbapi.com/?apikey='+APIkey+'&s='+movieForURI) //returns an object with property Search, value of Search is [] array of movies.
      .then((response) => {
        return axios.all((response.data.Search).map(x =>
          axios.get('http://www.omdbapi.com/?apikey='+APIkey+'&i='+x.imdbID))) //the result will be an array of promises
          //.then(responses =>console.log(responses[0].data.Plot,"RESPONSES")) //returns an array of responses, each response has a movie object in .data  //responses[0].data.Plot - path to plot
            .then(responses => {
              return response.data.Search.map((singleMovie, index) =>{
                return{...singleMovie, 
                          Plot: responses[index].data.Plot,
                          Released: responses[index].data.Released,
                          Length: responses[index].data.Runtime,
                          Genre: responses[index].data.Genre,
                          Awards: responses[index].data.Awards,
                          Metascore: responses[index].data.Metascore,
                          imdbRating: responses[index].data.imdbRating,
                        }
              })
            })
        })
  }
}

export function provideMovieInfo(movieID){
 console.log (movieID, "THIS IS movieID from Actions");
  return{
    type: 'MOVIE_INFO',
    payload:{imdbID: movieID}
  }
}

export function searchMovieByImdbID(movieID){
  console.log (movieID, "THIS IS movieID from searchMovieByImdbID Action");
  return{
    type: 'SEARCH_MOVIE_BY_ID',
    payload:
      axios.get(`http://www.omdbapi.com/?apikey=8730e0e&i=${movieID}`)
        .then(response => {
          return{
            Plot: response.data.Plot,
            Released: response.data.Released,
            Length: response.data.Runtime,
            Genre: response.data.Genre,
            Awards: response.data.Awards,
            Metascore: response.data.Metascore,
            imdbRating: response.data.imdbRating,
            Poster: response.data.Poster
          }
        })
  }
}