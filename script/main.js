//movie objects

var movieDatabase = (function(){

var moviesArray = [

{
    title: "The Lobster",
    year: 2015,
    cover: "https://media.senscritique.com/media/000011963740/source_big/The_Lobster.jpg",
    genres: ["Comedy", "Drama", "Romance", "Sci-Fi"],
    ratings: [],
    actors: [
    {
        name: "Colin Farrell"
    },
    {
        name: "Rachel Weisz"
    }
    ]
},

{
    title: "The Goonies",
    year: 1985,
    cover: "https://s-media-cache-ak0.pinimg.com/564x/50/c0/4f/50c04f97966de0ed73262de082aae11d.jpg",
    genres: ["Adventure", "Comedy", "Family"],
    ratings: [],
    actors: [
    {
        name: "Sean Astin"
    },
    {
        name: "Josh Brolin"
    }
    ]
},

{
    title: "Moonlight",
    year: 2016,
    cover: "http://cdn.a24films.com/assets/MOONLIGHT-QUOTEPOSTER-WEB.jpg",
    genres: ["Drama"],
    ratings: [],
    actors: [
    {
        name: "Mahershala Ali"
    },
    {
        name: "Shariff Earp"
    }
    ]
}
];

    function getAllMovies(){
        return moviesArray.map(function(movie){
                    // console.log('test' + movie.title);

        var list = document.createElement("li");
        var movieList = document.createTextNode(movie.title);
        list.appendChild(movieList);
        document.getElementById("movieList").appendChild(list);
        return movie.title;

        },0);

    }
//genreInput är ex "Comedy"

    function getGenre(genreInput){ 
        return moviesArray.filter((movie) => 
            movie.genres.some((genres) => genres === genreInput))
            .map(movie => {
            let genreList = Object.assign({}, movie); // makes a copy of movie
    // console.log(newGenre);
        return genreList.title;
        },0);
    }

      // function getGenre(genre){
      //   return movies.filter(function(movie){

        
      //   return movie.genre === "Comedy";
      //   }).map(function(movie){
      //     return movie.title;
        
      //   },0);

      // }
  

//         function getGenre(genre){
//         return movies.filter(function(movie, index, array){
//             // return movie.includes("Comedy", -100);
// var genre = " ";

// for (var i = 0; i < array.length; i++) {
//     console.log(array[i]);
// };
          
        // return movie.genre

        

        // },0);

     


  return {
    getAllMovies: getAllMovies,
    getGenre: getGenre("Romance")
  }

  // return{

  //   getGenre: function(genre){
  //       return movies.filter(function(movie){
        
  //       return movie.genre === "Comedy";
  //       }).map(function(movie){
  //         return movie.title;
          
  //       },0);
  //   }

  // }
    })();

function printMovieDatabase(){
    console.log(movieDatabase.getAllMovies());
    console.log(movieDatabase.getGenre);
}

printMovieDatabase();

// function printOut1(){
//   console.log(movieDatabase.getGenre("Comedy"));
// }

// printOut1();


var addNewMovie = function(){
    // console.log("click");
    var title = document.getElementById('title').value
    var year = document.getElementById('year').value
    var cover = document.getElementById('cover').value
    var genres = document.getElementById('genres').value
    var ratings = document.getElementById('ratings').value
    var actors = document.getElementById('actors').value


// fetch('http://fend16.azurewebsites.net/albums/' + id,
// {
//     method: "PATCH",
//     body: JSON.stringify({title: title, artist: artist}), 
//     headers: {
//         "Content-Type": "application/json" //specificera header
//     }
// })
//         .then(function(response){    
//             console.log(response.json());
//         return response;
        

// })

};


document.getElementById('add').addEventListener('click', addNewMovie);




// 1. Lägga till nya filmer
// 2. Visa alla filmer
// 3. Betygsätta en film
// 4. Sortera ut filmer efter vissa kriterier så som: högst rating, 
// sämst rating och filtrerat baserat på genre.
// 5. Lägga till och ta bort genres från en film






