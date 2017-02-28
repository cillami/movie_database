//Module pattern
//Genom att implementera module pattern kan man skydda metoder och variabler från att 
//hamna i det globala scope’t där det finns möjlighet att de skulle kunna skrivas över.
//Koden befinner sig i en closure och det vi returnerar är det som vi kan komma åt

//Object
var movieDatabase = (function(){

//Array with objects and arrays
var moviesArray = [

{
    title: "The Lobster",
    year: 2015,
    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDQ1NDE5NzQ1NF5BMl5BanBnXkFtZTgwNzA5OTM2NTE@._V1_SY1000_CR0,0,705,1000_AL_.jpg",
    genres: ["Comedy", "Drama", "Romance", "Sci-Fi"],
    ratings: [4, 5, 6, 7, 8, 10],
    average: [],
    idButtonAddRating: "the-lobster-button-add-rating",
    idButtonAddGenre: "the-lobster-button-add-genre",
    idButtonRemoveGenre: "the-lobster-button-remove-genre",
    idInputRating: "the-lobster-input-rating",
    idInputAddGenre: "the-lobster-input-add-genre",
    idInputRemoveGenre: "the-lobster-input-remove-genre",
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
    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTlmMWU5YTQtOWMxMi00OWE0LTg2MDItMjEyZDBjNWY0NDdhL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    genres: ["Adventure", "Comedy", "Family"],
    ratings: [8, 9, 10],
    average: [],
    idButtonAddRating: "the-goonies-button-add-rating",
    idButtonAddGenre: "the-goonies-button-add-genre",
    idButtonRemoveGenre: "the-goonies-button-remove-genre",
    idInputRating: "the-goonies-input-rating",
    idInputAddGenre: "the-goonies-input-add-genre",
    idInputRemoveGenre: "the-goonies-input-remove-genre",
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
    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg",
    genres: ["Comedy", "Drama", "Romance"],
    ratings: [2, 4],
    average: [],
    idButtonAddRating: "love-actually-button-add-rating",
    idButtonAddGenre: "love-actually-button-add-genre",
    idButtonRemoveGenre: "love-actually-button-remove-genre",
    idInputRating: "love-actually-input-rating",
    idInputAddGenre: "love-actually-input-add-genre",
    idInputRemoveGenre: "love-actually-input-remove-genre",
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
    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    genres: ["Drama", "Horror"],
    ratings: [8, 10, 10, 5],
    average: [],
    idButtonAddRating: "the-shining-button-add-rating",
    idButtonAddGenre: "the-shining-button-add-genre",
    idButtonRemoveGenre: "the-shining-button-remove-genre",
    idInputRating: "the-shining-input-rating",
    idInputAddGenre: "the-shining-input-add-genre",
    idInputRemoveGenre: "the-shining-input-remove-genre",
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
    average: [],
    idButtonAddRating: "moonlight-button-add-rating",
    idButtonAddGenre: "moonlight-button-add-genre",
    idButtonRemoveGenre: "moonlight-button-remove-genre",
    idInputRating: "moonlight-input-rating",
    idInputAddGenre: "moonlight-input-add-genre",
    idInputRemoveGenre: "moonlight-input-remove-genre",
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

        //return the moviesArray
        returnMoviesArray: (moviesArray) => {
            return moviesArray;
        },

        //DOM-manipulationsfunktion som printar ut arrayer som skickas in 
        showAllMovies: (moviesArray) => {
            console.log("hela Listan")
        //en tom sträng som ska fyllas med värdet som sparas i showHTML (template literals)
        //for-loopen går igenom varje objekt i arrayen och plussar på showHTML
        let showHTML = "";
            for (var i = 0; i < moviesArray.length ;i++){
                showHTML += `<div class="movies-html">
                <div class="movies-html-left">
                 <p><img src="${moviesArray[i].cover}" class="img"> </p>
                 </div>
                <div class="movies-html-middle">
                 <p>Movie Title: ${moviesArray[i].title}</p>
                 <p>Release Year: ${moviesArray[i].year} </p>
                 <p>Genres: ${moviesArray[i].genres} </p>
                 <p>Ratings: ${moviesArray[i].ratings} </p>
                 <p>Avrage rating: ${moviesArray[i].average} </p>
                 </div>
                <div class="movies-html-right">
                
                <p>Add your rating for this movie: </p>
                <input type="text" id="${moviesArray[i].idInputRating}">
                <button class="add-rating-btn" id="${moviesArray[i].idButtonAddRating}" data-inputid="${moviesArray[i].idInputRating}">Add rating</button>
               
                <p>Add genre for this movie: </p>
                <input type="text" id="${moviesArray[i].idInputAddGenre}">
                <button class="add-genre-btn" id="${moviesArray[i].idButtonAddGenre}" data-inputid="${moviesArray[i].idInputAddGenre}">Add Genre</button>
                
                <p>Remove genre for this movie: </p>
                <input type="text" id="${moviesArray[i].idInputRemoveGenre}">
                <button class="remove-genre-btn" id="${moviesArray[i].idButtonRemoveGenre}" data-inputid="${moviesArray[i].idInputRemoveGenre}">Remove Genre</button>
                <p>
                </div>
                </div>`;
            // showHTML läggs till på id movielist och visas på indexsidan genom innerHTML
            movieList.innerHTML = showHTML;

            // <p>Actors: ${moviesArray[i].actors[i].name} </p> 

            //calls the addeventlistener function 
            movieDatabase.addBtnEventListenersAddRating();
            movieDatabase.addBtnEventListenersAddGenre();
            movieDatabase.addBtnEventListenersRemoveGenre();
            }
        },
/*--------------------------*/ 
//hann inte slutföra dessa funktioner  
//jag vill koppla mina knappar och inputfält som ligger i template literal till nya funktioner
        addBtnEventListenersAddRating: () => {
            //querySelctorAll hämtar alla knappar med klassen .add-rating-btn
            var addRatingBtn = document.querySelectorAll('.add-rating-btn');
            //här loopas item igenom för att kopplas ihop med rätt knapp 
            addRatingBtn.forEach(function(item){
            item.addEventListener('click', movieDatabase.pushInRating);
            //addBtnEventListener-klicket aktiverar pushInRating funktionen
            });
        },
        addBtnEventListenersAddGenre: () => {
            var addGenreBtn = document.querySelectorAll('.add-genre-btn');
            addGenreBtn.forEach(function(item){
            item.addEventListener('click', movieDatabase.pushInGenreAdd);  
            });
        },
        addBtnEventListenersRemoveGenre: () => {
            var removeGenreBtn = document.querySelectorAll('.remove-genre-btn');
            removeGenreBtn.forEach(function(item){
            item.addEventListener('click', movieDatabase.pushInGenreRemove);
            });
        },
        pushInRating: () => {
        let idInputRating = document.getElementById(this.dataset.inputid).value;
        //värdet som hämtas från inputfältet sparas ned i en variabel
        // console.log("this id >> " + this.id);
        // console.log("this dataset inputid >> " + this.dataset.inputid);  
        // console.log("idInputRating >> " +idInputRating);
        },
        pushInGenreAdd: () => {
        let idInputAddGenre = document.getElementById(this.dataset.inputid).value;
        },
        pushInGenreRemove: () => {
        let idInputRemoveGenre = document.getElementById(this.dataset.inputid).value;
        },
/*--------------------------*/      
        // MOVIE CONSTRUCTOR 

        //konstruktorfunktion som skapar objekt 
        //parametrarna sparas när nya objekt skapas utifrån konstruktorn
        movieConstructor: function (title, year, cover, genres, ratings) {
            this.title = title;
            this.year = year;
            this.cover = cover;
            this.genres = genres.split(" ");
            this.ratings = ratings.split(" ");
            //split delar upp strängar till delar i en array 
            // this.actors = actors;
        },

        //hämtar värden från inputfältet på indexsidan, value kopplas till variablerna
        getUserInput: () => {
            var title = document.getElementById('title').value
            var year = document.getElementById('year').value
            var cover = document.getElementById('cover').value
            var genres = document.getElementById('genres').value
            var ratings = document.getElementById('ratings').value
            // var actors = document.getElementById('actors').value

            //ett nytt konstruktorobjekt skapas genom new, och värdena binds 
            //till det nya objektet som skapas (newMovie)
            var newMovie = new movieDatabase.movieConstructor(title, year, cover, genres, ratings);
            //skickar vidare det nya objektet till pushMovie-funktionen
            movieDatabase.pushMovie(newMovie); 
        },

        pushMovie: (movie) => {
            //pushes the input from the user/from the getUserInput function to the moviesArray.
            //creates a new array and push it into the moviesArray
            let newMoviesArray = moviesArray;
            newMoviesArray.push(movie);
            moviesArray = newMoviesArray;
        },

        inputAllMovies: () => { 
            //sends moviesArray to the showAllMovies function (to display it on index.html)
            movieDatabase.showAllMovies(moviesArray);   
        },

        inputGenre: (choice) => { 
            //we send the users choice (value) to the filterGenre function and then we send the result
            //from that function to the showAllMovies function. (to display it on index.html)
            const userChoice = movieDatabase.filterGenre(choice.target.value);
            movieDatabase.showAllMovies(userChoice);    
        },
        
        filterGenre: (genre) => { 
            const filteredGenres = [];
            //loopar igenom moviesArrayen 
                for (let i = 0; i < moviesArray.length; i++) {
            //sparar movieArrayens genres i en variabel för att kunna loopa igenom
            //den för att hitta de genres som motsvarar användarens input som
            //har skcikats in i funktionen, därefter pushas de in en efter en i en ny array
                    let genresArray = moviesArray[i].genres;
                        for (let j = 0; j < genresArray.length; j++) {
                            if (genresArray[j] == genre) {
                            filteredGenres.push(moviesArray[i]);
                   }
               }
           }
           return filteredGenres;
        },

        inputYear: (choice) => { 
            //we send the users choice (value) to the sortMovieByYear function and then we send the 
            //result from that function to the showAllMovies function. (to display it on index.html)
            let userYear = movieDatabase.sortMovieByYear(choice.target.value);
            movieDatabase.showAllMovies(userYear); 
        },

        //filter är en funktion som tar en funktion som argument och returnerar en ny filtrerad 
        //version av arrayen. här filtreras en ny array ut dvs movie och property year 
        //de värdena jämförs sedan med den parametern som skickades in 
        sortMovieByYear: (year) => {
            return moviesArray.filter((movie) => {
            return movie.year == year;
            });
        }, 

            //ett knapptryck på index-sidan aktiverar denna funktion
            //den kickar i sin tur igång showMaxRating-funktionen som sedan
            //skickar resultatet från funktionen vidare till showAllMovies
        inputMaxRatings: () => {
            let maxRating = movieDatabase.showMaxRating();
            movieDatabase.showAllMovies(maxRating);  
            },

        showMaxRating: () => {
            var maxMovies= {};
            var finalMaxMovies = [];
                //We take the first value in average as start value
            var max = moviesArray[0].average;
            for (var i = 0; i < moviesArray.length; i++){
                //We then compare every average value to this maximum value
                //if we find a bigger value, we enter the if-statement
                if (moviesArray[i].average > max){ 
                //the value that ends up in maxMovies gets overwritten for each loop, 
                //that is why we have a finalMaxMovies array
                maxMovies = moviesArray[i];
                console.log(maxMovies);
                }
            }
            //here we push in the final object into an array to be able to print it out in showAllMovies
            finalMaxMovies.push(maxMovies);
            return finalMaxMovies;                       
        },

        //the same functions as above (minimum movie rating)
        inputMinRatings: () => {
            const minRating = movieDatabase.showMinRating();
            movieDatabase.showAllMovies(minRating);   
            },

        showMinRating: () => {
            var minMovies= {};
            var finalMinMovies = [];
            var min = moviesArray[0].average;
            for (var i = 0; i < moviesArray.length; i++){
                if (moviesArray[i].average < min){ 
                minMovies = moviesArray[i];
                }
            }
            finalMinMovies.push(minMovies);
            return finalMinMovies;                       
        },

        meanRating: () => {
            //en for loop för att gå igenom moviesArrayen
            for (let i = 0; i < moviesArray.length; i++) {
                //tar ut ratings för att kunna använda reduce
                let ratingList = moviesArray[i].ratings;
                //tar ut average för att kunna pusha in det uträknade medelvärdet
                let averageList = moviesArray[i].average;
                //reduce slår ihop det totala värdet i ratings-arrayerna
                let meanRating = ratingList.reduce((total, currentValue) => {
                    return total + currentValue;
                }, 0);
                    var averageRating = meanRating/ratingList.length;
                    //det uträknade medelvärdet sparas i en variabel
                    //värdet avrundas till en decimal med toFixed
                    var fixedAverageRating = averageRating.toFixed();
                    //pushas sedan in i moviesArray[i]average
                    averageList.push(fixedAverageRating);
            }
        }
    };
})(); //här tar module pattern objektet slut

//all interaktion som sker på indexsidan kickar igång funktionerna i addEventListener
document.getElementById('add').addEventListener('click', movieDatabase.getUserInput);
document.getElementById('showMovies').addEventListener('click', movieDatabase.inputAllMovies);
document.getElementById('getGenre').addEventListener('change', movieDatabase.inputGenre);
document.getElementById('getYear').addEventListener('change', movieDatabase.inputYear);
// document.getElementById('showHighRatings').addEventListener('click', movieDatabase.inputHighRatings);
// document.getElementById('showLowRatings').addEventListener('click', movieDatabase.inputLowRatings);
document.getElementById('showMinRating').addEventListener('click', movieDatabase.inputMinRatings);
document.getElementById('showMaxRating').addEventListener('click', movieDatabase.inputMaxRatings);

function printMovieDatabase(){
// console.log(movieDatabase.showAllMovies());
// console.log(movieDatabase.addNewMovie);
// console.log(movieDatabase.returnMoviesArray());
// console.log(movieDatabase.getGenre());
// console.log(movieDatabase.showGenre());
// console.log(movieDatabase.rating());
console.log(movieDatabase.meanRating());
// console.log(movieDatabase.showMaxRating());
// console.log(movieDatabase.pusInRating("Comedy"));
// console.log(movieDatabase.sortMovieByYear());
// console.log(movieDatabase.pushMeanRating());
// console.log(movieDatabase.ratingMean());
// console.log(movieDatabase.getBla());
}
printMovieDatabase();


