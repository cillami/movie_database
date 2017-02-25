var movieDatabase = (function(){

var moviesArray = [

{
    title: "The Lobster",
    year: 2015,
    cover: "https://media.senscritique.com/media/000011963740/source_big/The_Lobster.jpg",
    genres: ["Comedy", "Drama", "Romance", "Sci-Fi"],
    ratings: [8,2],
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
    ratings: [4,5],
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
    title: "Love Actually",
    year: 2003,
    cover: "https://images-na.ssl-images-amazon.com/images/I/51PD8CBP6XL.jpg",
    genres: ["Comedy", "Drama", "Romance"],
    ratings: [4,5],
    actors: [
    {
        name: "Hugh Grant"
    },
    {
        name: "Emma Thompson"
    }
    ]
},

{
    title: "The Shining",
    year: 1980,
    cover: "http://spartanoracle.com/wp-content/uploads/2015/10/shining-2.jpg",
    genres: ["Drama", "Horror"],
    ratings: [4,5],
    actors: [
    {
        name: "Hugh Grant"
    },
    {
        name: "Emma Thompson"
    }
    ]
},

{
    title: "Moonlight",
    year: 2016,
    cover: "http://cdn.a24films.com/assets/MOONLIGHT-QUOTEPOSTER-WEB.jpg",
    genres: ["Drama"],
    ratings: [5,2],
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

    return {

        returnMoviesArray: function(){
            return moviesArray;
        },

        showAllMovies: function(){
        // console.log("click");
            movieList.innerHTML = "";
            for (var i = 0; i < moviesArray.length ;i++){
                var html = `<div class="movies-html">
                <div class="movies-html-left">
                 <p><img src="${moviesArray[i].cover}" class="img"> </p>
                 </div>
                <div class="movies-html-left">
                 <p>Movie Title : ${moviesArray[i].title}</p>
                 <p>Release Year : ${moviesArray[i].year} </p>
                 <p>Genres : ${moviesArray[i].genres} </p>
                 <p>Ratings : ${moviesArray[i].ratings} </p>
                 <br>
                 </div>
                </div>`;
            movieList.innerHTML += html;
            }
        },

        showGenre: function(genreList){
            console.log("click");
     
            movieList.innerHTML = "";
            for (var i = 0; i < genreList.length ;i++){
                var html = `<div class="movies-html">
                <div class="movies-html-left">
                 <p><img src="${genreList[i].cover}" class="img"> </p>
                 </div>
                <div class="movies-html-left">
                 <p>Movie Title : ${genreList[i].title}</p>
                 <p>Release Year : ${genreList[i].year} </p>
                 <p>Genres : ${genreList[i].genres} </p>
                 <p>Ratings : ${genreList[i].ratings} </p>
                 <br>
                 </div>
                </div>`;
            movieList.innerHTML += html;
            }
        },

        movieConstructor: function(title, year, cover, genres, ratings, actors){
            this.title = title;
            this.year = year;
            this.cover = cover;
            this.genres = genres.split(" ");
            this.ratings = ratings.split(" ");
            this.actors = actors;
        },

        getUserInput: function(){
            console.log("click");
            var title = document.getElementById('title').value
            var year = document.getElementById('year').value
            var cover = document.getElementById('cover').value
            var genres = document.getElementById('genres').value
            var ratings = document.getElementById('ratings').value
            var actors = document.getElementById('actors').value

            var newMovie = new movieDatabase.movieConstructor(title, year, cover, genres, ratings, actors);
            moviesArray.push(newMovie); 
        },


        inputGenre: function(choice){ 
        var userChoice = movieDatabase.filterGenre(choice.target.value);
        // var lisst = getGenre();
        console.log(choice.target.value);
        console.log(userChoice);
        movieDatabase.showGenre(userChoice);    
        },

        // filterGenre: function(genre){ 

        //     return moviesArray.filter((movie) =>
        //     movie.genres.some((genres) => genres == genre))
        //     .map(movie => {
        //     // var genreList = Object.assign({}, movie); 
        //     return movie;
        //     },0);
        // },
        filterGenre: function(genre){ 

            return moviesArray.filter((movie) =>
            movie.genres.some((genres) => genres == genre))
            .map(movie => {
            // var genreList = Object.assign({}, movie); 
            return movie;
            },0);
        },


    };

})();

document.getElementById('add').addEventListener('click', movieDatabase.getUserInput);
document.getElementById('showMovies').addEventListener('click', movieDatabase.showAllMovies);
document.getElementById('getGenre').addEventListener('change', movieDatabase.inputGenre);

function printMovieDatabase(){

// console.log(movieDatabase.showAllMovies());
// console.log(movieDatabase.getGenre(movieDatabase.moviesArray));
// console.log(movieDatabase.addNewMovie);
// console.log(movieDatabase.returnMoviesArray());
// console.log(movieDatabase.getGenre());
// console.log(movieDatabase.showGenre());
}

printMovieDatabase();


// function inputGenre(choice){ 
//         var userChoice = movieDatabase.filterGenre(choice.target.value);
//         // var lisst = getGenre();
//         console.log(choice.target.value);
//         console.log(userChoice);
//         movieDatabase.showGenre(userChoice);    
//     };




// 1. Lägga till nya filmer
// 2. Visa alla filmer
// 3. Betygsätta en film
// 4. Sortera ut filmer efter vissa kriterier så som: högst rating, 
// sämst rating och filtrerat baserat på genre.
// 5. Lägga till och ta bort genres från en film



