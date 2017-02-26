
var movieDatabase = (function(){

var moviesArray = [

{
    title: "The Lobster",
    year: 2015,
    cover: "https://media.senscritique.com/media/000011963740/source_big/The_Lobster.jpg",
    genres: ["Comedy", "Drama", "Romance", "Sci-Fi"],
    ratings: [4, 5, 6, 7],
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
    ratings: [8, 9, 10],
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
    ratings: [2, 4],
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
    ratings: [8, 10, 10, 5],
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
    ratings: [10, 9, 8],
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

        showYear: function(userYear){
            console.log("cloooock");
     
            movieList.innerHTML = "";
            for (var i = 0; i < userYear.length ;i++){
                var html = `<div class="movies-html">
                <div class="movies-html-left">
                 <p><img src="${userYear[i].cover}" class="img"> </p>
                 </div>
                <div class="movies-html-left">
                 <p>Movie Title : ${userYear[i].title}</p>
                 <p>Release Year : ${userYear[i].year} </p>
                 <p>Genres : ${userYear[i].genres} </p>
                 <p>Ratings : ${userYear[i].ratings} </p>
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
            this.genres = genres.split('\n');
            this.ratings = ratings.split('\n');
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
            movieDatabase.pushMovie(newMovie); 
        },

        pushMovie: function(movie){

            console.log("clcick" + movie)
            var newMoviesArray = moviesArray;
            newMoviesArray.push(movie);
            moviesArray = newMoviesArray;
 
            // moviesArray.push(newMovie); 
        },


        inputGenre: function(choice){ 
            var userChoice = movieDatabase.filterGenre(choice.target.value);
            // var lisst = getGenre();
            console.log(choice.target.value);
            console.log(userChoice);
            movieDatabase.showGenre(userChoice);    
        },

        filterGenre: function(genre){ 
            return moviesArray.filter((movie) =>
            movie.genres.some((genres) => genres == genre))
            .map(movie => {
            // var genreList = Object.assign({}, movie); 
            return movie;
            },0);
        },

        inputYear: function(choice){ 
            var userYear = movieDatabase.sortMovieByYear(choice.target.value);
            // var lisst = getGenre();
            console.log(choice.target.value);
            movieDatabase.showYear(userYear);    
        },

        sortMovieByYear: function(year){
            console.log("clack")
        return moviesArray.filter((movie) => {
            return movie.year == year;
        });
    }, 

        showHighRatings: function(){
            console.log("high click")
            for (var i = 0; i < moviesArray.length; i++) {
                var highRatList = moviesArray[i].ratings;
            var highRating = highRatList.reduce((total, rating) => {
                    return total + rating;
            }, 0);

            if (highRating >= 6){
                console.log(moviesArray[i].title + "what" + highRating);
            }

            }},
        
    

    
    showLowRatings: function(){
            console.log("low click");
            for (let i = 0; i < moviesArray.length; i++) {
                let lowRatList = moviesArray[i].ratings;
            let lowRating = lowRatList.reduce((total, rating) => {
                    return total + rating;
            }, 0);
                 if(lowRating <= 5){
                    console.log(moviesArray[i].title + " " +lowRating);
                }
            }
    },

        meanRating: function(){
            for (let i = 0; i < moviesArray.length; i++) {
                let ratList = moviesArray[i].ratings;
                let meanRating = ratList.reduce((total, rating) => {
                    return total + rating;
                }, 0);
                    let numberOfRatings = ratList.length;
                    let emptyRatingList = moviesArray[i].ratings;
                        while (emptyRatingList.length) { 
                            emptyRatingList.pop(); 
                        }
                        let meanmeanRating = emptyRatingList.push(meanRating/numberOfRatings);
                        // return moviesArray, obs levererar bara ett värde
            }
    },

    };

})();

document.getElementById('add').addEventListener('click', movieDatabase.getUserInput);
document.getElementById('showMovies').addEventListener('click', movieDatabase.showAllMovies);
document.getElementById('getGenre').addEventListener('change', movieDatabase.inputGenre);
document.getElementById('getYear').addEventListener('change', movieDatabase.inputYear);


document.getElementById('showHighRatings').addEventListener('click', movieDatabase.showHighRatings);
document.getElementById('showLowRatings').addEventListener('click', movieDatabase.showLowRatings);


function printMovieDatabase(){

// console.log(movieDatabase.showAllMovies());
// console.log(movieDatabase.getGenre(movieDatabase.moviesArray));
// console.log(movieDatabase.addNewMovie);
console.log(movieDatabase.returnMoviesArray());
// console.log(movieDatabase.getGenre());
// console.log(movieDatabase.showGenre());
// console.log(movieDatabase.rating());
console.log(movieDatabase.meanRating());
// console.log(movieDatabase.sortMovieByYear(2016));
// console.log(movieDatabase.pushRating());
// console.log(movieDatabase.ratingMean());
// console.log(movieDatabase.getBla());
//visar bara sista filmens array av ratings
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



