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
                return{...singleMovie, plot: responses[index].data.Plot}
              })
            })
        })
  }
}

export function provideMovieInfo(movieID){
  return{
    type: 'MOVIE_INFO',
    payload:''
  }
}

// return{
//   type: 'SEARCH_MOVIE',
//   payload:
//     axios.get('http://www.omdbapi.com/?apikey='+APIkey+'&s='+movieForURI)
//       .then(response => response.data.Search)
// }